export default function CourseListRow({
  isHeader = false,
  textFirstCell = '',
  textSecondCell = null,
}) {
  const headerBg = 'rgba(222, 181, 181, 0.66)';
  const rowBg = 'rgba(205, 205, 205, 0.45)';
  return (
    <tr style={{ backgroundColor: isHeader ? headerBg : rowBg }}>
      {isHeader ? (
        <>
          <th
            className="border border-gray-400"
            colSpan={textSecondCell ? 1 : 2}
          >
            {textFirstCell}
          </th>
          {textSecondCell && (
            <th className="border border-gray-400">{textSecondCell}</th>
          )}
        </>
      ) : (
        <>
          <td className="border border-gray-400 pl-2">{textFirstCell}</td>
          <td className="border border-gray-400 pl-2">{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
