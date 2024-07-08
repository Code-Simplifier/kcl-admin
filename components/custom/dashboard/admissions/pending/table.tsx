import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const Table = async () => {
  let pendingData: any[] = [];
  const querySnapshot = await getDocs(collection(db, "temp_students"));

  querySnapshot.forEach((doc) => {
    pendingData.push({ ...doc.data(), id: doc.id });
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          {pendingData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.studentEmail}</td>
              <td>{item.phoneNumber}</td>
              {/* Add other columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
