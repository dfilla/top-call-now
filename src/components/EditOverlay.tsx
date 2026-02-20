import { useState, useEffect, useCallback, useRef } from "react";
import { Pencil, X, Save } from "lucide-react";

interface EditingState {
  element: HTMLElement;
  rect: DOMRect;
  attributes: { name: string; value: string }[];
  textContent: string;
}

const EditOverlay = () => {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState<{ rect: DOMRect; el: HTMLElement } | null>(null);
  const [editing, setEditing] = useState<EditingState | null>(null);
  const [attrs, setAttrs] = useState<{ name: string; value: string }[]>([]);
  const [text, setText] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  const getEditableAttrs = (el: HTMLElement) => {
    const skip = new Set(["data-reactroot", "data-radix", "style"]);
    const result: { name: string; value: string }[] = [];
    for (const attr of Array.from(el.attributes)) {
      if (!skip.has(attr.name) && !attr.name.startsWith("data-")) {
        result.push({ name: attr.name, value: attr.value });
      }
    }
    return result;
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!active || editing) return;
      const target = e.target as HTMLElement;
      if (!target || target.closest("[data-edit-overlay]") || target.closest("[data-edit-panel]")) {
        setHovered(null);
        return;
      }
      const rect = target.getBoundingClientRect();
      setHovered({ rect, el: target });
    },
    [active, editing]
  );

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!active || editing) return;
      const target = e.target as HTMLElement;
      if (!target || target.closest("[data-edit-overlay]") || target.closest("[data-edit-panel]")) return;
      e.preventDefault();
      e.stopPropagation();
      const rect = target.getBoundingClientRect();
      const attributes = getEditableAttrs(target);
      const directText =
        target.childNodes.length === 1 && target.childNodes[0].nodeType === Node.TEXT_NODE
          ? target.textContent || ""
          : "";
      setEditing({ element: target, rect, attributes, textContent: directText });
      setAttrs(attributes);
      setText(directText);
      setHovered(null);
    },
    [active, editing]
  );

  useEffect(() => {
    if (!active) return;
    document.addEventListener("mousemove", handleMouseMove, true);
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove, true);
      document.removeEventListener("click", handleClick, true);
    };
  }, [active, handleMouseMove, handleClick]);

  const applyChanges = () => {
    if (!editing) return;
    const el = editing.element;
    // Update attributes
    attrs.forEach(({ name, value }) => {
      try {
        el.setAttribute(name, value);
      } catch {}
    });
    // Update text
    if (editing.textContent !== "" && text !== editing.textContent) {
      if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
        el.textContent = text;
      }
    }
    setEditing(null);
  };

  const addAttribute = () => {
    setAttrs([...attrs, { name: "", value: "" }]);
  };

  if (!active) {
    return (
      <button
        data-edit-overlay
        onClick={() => setActive(true)}
        className="fixed bottom-6 right-6 z-[9999] h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        title="Edit Mode aktivieren"
      >
        <Pencil className="h-5 w-5" />
      </button>
    );
  }

  return (
    <>
      {/* Toggle off button */}
      <button
        data-edit-overlay
        onClick={() => {
          setActive(false);
          setHovered(null);
          setEditing(null);
        }}
        className="fixed bottom-6 right-6 z-[9999] h-12 w-12 rounded-full bg-destructive text-destructive-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        title="Edit Mode beenden"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Edit mode indicator */}
      <div
        data-edit-overlay
        className="fixed top-20 left-1/2 -translate-x-1/2 z-[9999] bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg pointer-events-none"
      >
        ✏️ Edit Mode — Klicke auf ein Element
      </div>

      {/* Hover highlight + pencil */}
      {hovered && !editing && (
        <div
          data-edit-overlay
          className="pointer-events-none fixed z-[9998]"
          style={{
            top: hovered.rect.top + window.scrollY,
            left: hovered.rect.left + window.scrollX,
            width: hovered.rect.width,
            height: hovered.rect.height,
          }}
        >
          <div className="absolute inset-0 border-2 border-primary/60 rounded bg-primary/5" />
          <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow">
            <Pencil className="h-3 w-3" />
          </div>
          <div className="absolute -bottom-6 left-0 bg-foreground/90 text-background text-[10px] px-1.5 py-0.5 rounded font-mono whitespace-nowrap">
            {"<"}{hovered.el.tagName.toLowerCase()}{typeof hovered.el.className === "string" && hovered.el.className ? ` .${hovered.el.className.split(" ")[0]}` : ""}{">"}
          </div>
        </div>
      )}

      {/* Attribute editor panel */}
      {editing && (
        <div
          data-edit-panel
          ref={panelRef}
          className="fixed top-20 right-6 z-[9999] w-80 max-h-[70vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-display font-bold text-sm">
              {"<"}{editing.element.tagName.toLowerCase()}{">"}
            </h3>
            <button onClick={() => setEditing(null)} className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Text content */}
          {editing.textContent !== "" && (
            <div className="mb-3">
              <label className="text-xs font-semibold text-muted-foreground block mb-1">Text</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm resize-y min-h-[60px]"
              />
            </div>
          )}

          {/* Attributes */}
          <div className="space-y-2 mb-3">
            <label className="text-xs font-semibold text-muted-foreground block">Attribute</label>
            {attrs.map((attr, i) => (
              <div key={i} className="flex gap-1.5">
                <input
                  value={attr.name}
                  onChange={(e) => {
                    const next = [...attrs];
                    next[i] = { ...next[i], name: e.target.value };
                    setAttrs(next);
                  }}
                  placeholder="name"
                  className="w-24 rounded border border-border bg-background px-2 py-1 text-xs font-mono"
                />
                <input
                  value={attr.value}
                  onChange={(e) => {
                    const next = [...attrs];
                    next[i] = { ...next[i], value: e.target.value };
                    setAttrs(next);
                  }}
                  placeholder="value"
                  className="flex-1 rounded border border-border bg-background px-2 py-1 text-xs font-mono"
                />
                <button
                  onClick={() => setAttrs(attrs.filter((_, j) => j !== i))}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
            <button onClick={addAttribute} className="text-xs text-primary hover:underline">
              + Attribut hinzufügen
            </button>
          </div>

          <button
            onClick={applyChanges}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Save className="h-4 w-4" />
            Übernehmen
          </button>
        </div>
      )}
    </>
  );
};

export default EditOverlay;
