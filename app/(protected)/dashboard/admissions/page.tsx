import AdmissionCard from "@/components/custom/dashboard/admissions/admissionCard";
import { db } from "@/lib/firebase";
import { collection, getCountFromServer } from "firebase/firestore";

const Admissions = async () => {
  const tempStudents = collection(db, "temp_students");
  const tempStudentsSnapshot = await getCountFromServer(tempStudents);

  const admHref = "/dashboard/admissions";
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center mt-5 mx-1 space-x-3">
        <AdmissionCard
          title="Admitted"
          number="10"
          href={`${admHref}/admitted`}
        />
        <AdmissionCard
          title="Provisional"
          number="8"
          href={`${admHref}/provisional`}
        />
        <AdmissionCard
          title="Pending"
          number={tempStudentsSnapshot.data().count}
          href={`${admHref}/pending`}
        />
      </div>
    </div>
  );
};

export default Admissions;
