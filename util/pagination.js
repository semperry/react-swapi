export const next = (currentPage) => currentPage + 1;
export const prev = (currentPage) => Math.max(currentPage - 1, 1);
export const jump = (toPage) => toPage;
