"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../app/ClientBody";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import Navbar from '../../components/navbar';
import { Pencil, Trash2, Plus, Search } from 'lucide-react';

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
  makkahdist: "",
  madinahdist: "",
  monthyear: "",
  touradd2: "",
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
};

export default function AdminDashboard() {
  const { isAuthenticated, setIsAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [form, setForm] = useState(INITIAL_FORM);
  const [tours, setTours] = useState<any[]>([]);
  const [loadingTours, setLoadingTours] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddingTour, setIsAddingTour] = useState(false);
  const [editingTour, setEditingTour] = useState<any>(null);

  useEffect(() => {
    if (!loading && !isAuthenticated) router.replace("/admin/login");
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await fetch('/api/tours/all');
      if (!response.ok) throw new Error('Failed to fetch tours');
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.error('Error fetching tours:', error);
      alert('Failed to fetch tours');
    } finally {
      setLoadingTours(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editingTour ? '/api/tours/update' : '/api/tours/add';
      const method = editingTour ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingTour ? { ...form, id: editingTour.id } : form),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `Failed to ${editingTour ? 'update' : 'add'} tour`);
      }

      const result = await response.json();
      console.log(`Tour ${editingTour ? 'updated' : 'added'} successfully:`, result);
      
      // Refresh tours list
      await fetchTours();
      
      // Reset form and close modal
      setForm(INITIAL_FORM);
      setIsAddingTour(false);
      setEditingTour(null);
    } catch (error) {
      console.error(`Error ${editingTour ? 'updating' : 'adding'} tour:`, error);
      alert(error.message || `Failed to ${editingTour ? 'update' : 'add'} tour`);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this tour?')) return;

    try {
      const response = await fetch(`/api/tours/delete?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to delete tour');
      }

      // Refresh tours list
      await fetchTours();
    } catch (error) {
      console.error('Error deleting tour:', error);
      alert(error.message || 'Failed to delete tour');
    }
  };

  const handleEdit = (tour: any) => {
    // Ensure date fields are properly set without truncation
    const tourWithFullDates = {
      ...tour,
      departdate: tour.departdate || '',
      arrivaldate: tour.arrivaldate || ''
    };
    setEditingTour(tourWithFullDates);
    setForm(tourWithFullDates);
    setIsAddingTour(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    window.location.href = "/admin/login";
  };

  const filteredTours = tours.filter(tour => 
    tour.tourname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.touradd.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tour.departlocation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="p-8 text-center text-gray-400">Loading…</div>;
  if (!isAuthenticated) return null;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar/>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">PickUmrah Admin Dashboard</h1>
          <Button 
            className="bg-black text-white hover:bg-gray-800"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>

        {/* Search and Add Tour Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search tours..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button
            onClick={() => {
              setIsAddingTour(true);
              setEditingTour(null);
              setForm(INITIAL_FORM);
            }}
            className="bg-black text-white hover:bg-gray-800"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Tour
          </Button>
        </div>

        {/* Tours Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tour Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loadingTours ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">Loading tours...</td>
                  </tr>
                ) : filteredTours.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">No tours found</td>
                  </tr>
                ) : (
                  filteredTours.map((tour) => (
                    <tr key={tour.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tour.tourname}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tour.touradd}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{tour.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tour.days} days</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tour.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-900 mr-2"
                          onClick={() => handleEdit(tour)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-900"
                          onClick={() => handleDelete(tour.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Add/Edit Tour Modal */}
        {isAddingTour && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">
                    {editingTour ? 'Edit Tour' : 'Add New Tour'}
                  </h2>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setIsAddingTour(false);
                      setEditingTour(null);
                      setForm(INITIAL_FORM);
                    }}
                  >
                    ✕
                  </Button>
                </div>
                <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(form).map(([key, value]) => (
                    <div key={key}>
                      <Label className="capitalize mb-1" htmlFor={key}>
                        {key}
                      </Label>
                      <Input
                        className="w-full border rounded-md border-black"
                        id={key}
                        name={key}
                        value={value || ''}
                        onChange={handleChange}
                        type="text"
                        maxLength={key === 'departdate' || key === 'arrivaldate' ? 50 : undefined}
                        autoComplete="on"
                      />
                    </div>
                  ))}
                  <div className="col-span-full flex justify-end space-x-4 mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsAddingTour(false);
                        setEditingTour(null);
                        setForm(INITIAL_FORM);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                      {editingTour ? 'Save Changes' : 'Add Tour'}
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        )}
      </div>
    </main>
  );
}
