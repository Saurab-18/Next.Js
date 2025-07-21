import { Card } from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <>
      <Card>Notifications Page for Parellel routes</Card>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </>
  );
}
