type Props = {
  docUrlOrId: string;
  height?: string;
};

function extractDocId(input: string) {
  const maybeId = input.trim();
  if (!maybeId.includes('/')) return maybeId;

  const match = maybeId.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) return match[1];
  const parts = maybeId.split('/').filter(Boolean);
  return parts[parts.length - 1];
}

export default function GoogleDocsViewer({ docUrlOrId, height = '70vh' }: Props) {
  const docId = extractDocId(docUrlOrId);

  const src = `https://docs.google.com/document/d/${docId}/preview`;

  return (
    <div className="w-full rounded-xl overflow-hidden relative" style={{ height }}>
      <iframe
        title={`Google Doc ${docId}`}
        src={src}
        className="w-full h-full border-0"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        allowFullScreen
      />
    </div>
  );
}


