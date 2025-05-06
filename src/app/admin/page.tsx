"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../app/ClientBody";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import Navbar from '../../components/navbar'

const INITIAL_FORM = {
  recommended: "",
  tourname: "",
  touradd: "",
  departdate: "",
  arrivaldate: "",
  departlocation: "",
  price: "",
  days: "",
  type: "",
  stars: "",
  makkadist: "",
  madinadist: "",
  monthyear: "",
  Touradd2: "",
  tourstars: "",
  reviews: "",
  twoshare: "",
  threeshare: "",
  fourshare: "",
  childbed: "",
  infant: "",
  Makkahhoteltour: "",
  Madinahhoteltour: "",
  makkahhotelstars: "",
  madinahhotelstars: "",
  makkahpic: "",
  madinahpic: "",
  makkahmap: "",
  madinahmap: "",
  tour: "",
};

export default function AdminDashboard() {
  const { isAuthenticated, setIsAuthenticated, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !isAuthenticated) router.replace("/admin/login");
  }, [isAuthenticated, loading, router]);

  const [form, setForm] = useState(INITIAL_FORM);
  const [demoData, setDemoData] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoData((data) => [
      { ...form, id: Date.now().toString().slice(-6) },
      ...data,
    ]);
    setForm(INITIAL_FORM);
  };

  const handleDelete = (id: string) => {
    setDemoData((d) => d.filter((row) => row.id !== id));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    window.location.href = "/admin/login";
  };

  if (loading) return <div className="p-8 text-center text-gray-400">Loading…</div>;
  if (!isAuthenticated) return null;
  return (
    <main className="min-h-screen bg-white p-4">
      <Navbar/>
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold">PickUmrah Admin Dashboard</h1>
          <Button className="w-auto mt-2 rounded-md border border-black hover:bg-black hover:text-white" variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <Card className="p-8 mb-10">
          <form
            onSubmit={handleAdd}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-auto"
          >
            {Object.entries(form).map(([key, value]) => (
              <div key={key}>
                <Label className="capitalize mb-1" htmlFor={key}>
                  {key}
                </Label>
                <Input
                  className="rounded-md border w-full "
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  type="text"
                  autoComplete="off"
                />
              </div>
            ))}
          <div className="col-span-3 flex justify-center ">
           <Button type="submit" className="w-72 mt-2 text-center self-center rounded-md border border-black hover:bg-black hover:text-white">
                Add New
           </Button>
           </div>
          </form>
        </Card>
        {demoData.length > 0 && (
          <Card className="p-6 overflow-auto">
            <h2 className="font-semibold mb-4">Records (Demo, not saved)</h2>
            <table className="w-full text-sm border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-2 py-1">ID</th>
                  {Object.keys(INITIAL_FORM).map((k) => (
                    <th key={k} className="border border-gray-300 px-2 py-1">
                      {k}
                    </th>
                  ))}
                  <th className="border border-gray-300 px-2 py-1">Delete</th>
                </tr>
              </thead>
              <tbody>
                {demoData.map((row) => (
                  <tr key={row.id} className="even:bg-gray-50">
                    <td className="border border-gray-300 px-2 py-1">{row.id}</td>
                    {Object.keys(INITIAL_FORM).map((k) => (
                      <td key={k} className="border border-gray-300 px-2 py-1">
                        {row[k]}
                      </td>
                    ))}
                    <td className="border border-gray-300 px-2 py-1 text-center ">
                      <Button
                        className="bg-red-500 hover:text-white"
                        type="button"
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(row.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}
      </div>
    </main>
  );
}
