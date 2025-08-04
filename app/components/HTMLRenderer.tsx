export const HTMLRenderer = ({ htmlContent }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: htmlContent,
      }}
    />
  );
};