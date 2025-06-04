// utils/sanitizeHtml.ts
import DOMPurify from 'dompurify';

export function sanitizeHtml(dirty) {
  return DOMPurify.sanitize(dirty);
}
