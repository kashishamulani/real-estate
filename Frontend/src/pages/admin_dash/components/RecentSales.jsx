const sales = [
    { name: "John Doe", email: "john.doe@example.com", amount: "$1999.00" },
    { name: "Alice Smith", email: "alice.smith@example.com", amount: "$1499.00" },
    { name: "Robert Johnson", email: "robert.johnson@example.com", amount: "$899.00" },
    { name: "Emily Brown", email: "emily.brown@example.com", amount: "$3499.00" },
    { name: "Michael Wilson", email: "michael.wilson@example.com", amount: "$699.00" },
  ];
  
  export default function RecentSales() {
    return (
      <div className="bg-gray-900 p-5 rounded-lg text-white mt-5">
        <h2 className="mb-3">Recent Sales</h2>
        {sales.map((sale, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
            <div>
              <p>{sale.name}</p>
              <small className="text-gray-400">{sale.email}</small>
            </div>
            <p>{sale.amount}</p>
          </div>
        ))}
      </div>
    );
  }
  