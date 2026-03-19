// utils/translateMapper.ts

type Primitive = string | number | boolean;

type LocaleNode = {
  loc?: { source?: string };
};

// type LocaleArray = LocaleNode & {
//   [key: string]: LocaleNode | LocaleNode[] | unknown;
// };

/**
 * Extrae el valor `loc.source` de un nodo de traducción si existe,
 * o retorna el valor primitivo directamente.
 */
function extractValue(value: unknown): Primitive | Primitive[] | Record<string, unknown> | null {
  
  if (value === null || value === undefined) return null;

  // Si es un array, mapear recursivamente cada elemento
  if (Array.isArray(value)) {
    return value.map((item) => extractValue(item)) as Primitive[];
  }

  // Si es un objeto con `loc.source`, extraer el source
  if (typeof value === 'object') {
    const node = value as LocaleNode;
    if (node.loc?.source !== undefined) {
      return node.loc.source;
    }

    // Si es un objeto sin `loc`, mapear sus propiedades recursivamente
    return mapLocaleObject(value as Record<string, unknown>);
  }

  // Valor primitivo directo
  return value as Primitive;
}

/**
 * Mapea recursivamente un objeto extrayendo todos los `loc.source`.
 */
function mapLocaleObject(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, extractValue(value)])
  );
}

/**
 * Función dinámica que convierte el resultado de `tm()` en un array
 * tipado, adaptándose automáticamente a cualquier interfaz `T`.
 */
export function mapTranslationItems<T extends Record<string, unknown>>(
  rawItems: Array<T>
): Record<string, unknown>[] {
  return Object.values(rawItems).map((item) => mapLocaleObject(item as Record<string, unknown>));
}