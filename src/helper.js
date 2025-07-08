export function CheckHeading(str) {
  const trimmed = str.trim();
  return (
    (/^\*\*.+\*\*$/.test(trimmed)) || // Matches **Heading**
    (/^##+ .+/.test(trimmed))         // Matches ## Heading or ### Heading
  );
}

export function ReplaceHeadingStarts(str) {
  const trimmed = str.trim();

  if (/^\*\*.+\*\*$/.test(trimmed)) {
    return trimmed.slice(2, -2).trim(); // Remove both ** from start and end
  }

  if (/^##+ .+/.test(trimmed)) {
    return trimmed.replace(/^##+\s*/, '').trim(); // Remove ## or ### and any leading spaces
  }

  return trimmed;
}
