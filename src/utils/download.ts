import React from 'react';

export const downloadBrochure = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }
  const link = document.createElement('a');
  link.href = '/brochures/agni-kawach-brochure.pdf';
  link.download = 'Agni-Kawach-Fire-Ball-Brochure.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}; 