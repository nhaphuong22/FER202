import React from 'react';

export default function RetailCompanies({ companies }) {
  // Lọc category Retail và tăng năm bắt đầu lên 1
  const retailCompanies = companies
    .filter(company => company.category === 'Retail')
    .map(company => ({ ...company, start: company.start + 1 }));

  return (
    <table className="retail-table">
      <tbody>
        {retailCompanies.map((c, index) => (
          <tr key={index}>
            <td><strong>{c.name}</strong></td>
            <td><strong>{c.start}</strong></td>
            <td><strong>{c.end}</strong></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

