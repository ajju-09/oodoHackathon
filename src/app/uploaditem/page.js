'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';

export default function UploadItemForm() {
  const { user } = useUser();
  const router = useRouter();

  const [form, setForm] = useState({
    title: '',
    description: '',
    images: [],
    category: '',
    type: '',
    size: '',
    condition: '',
    tags: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file)); // You’ll replace this with actual upload URL if using Cloudinary
    setForm((prev) => ({ ...prev, images: urls }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...form,
        tags: form.tags.split(',').map((tag) => tag.trim()),
      };

      const res = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push('/dashboard');
      }
    } catch (err) {
      console.error('Error uploading item:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#121212] text-white p-6">
      <div className="max-w-3xl mx-auto bg-[#1e1e1e] rounded-xl p-6 shadow-md">
        <h1 className="text-2xl font-bold text-emerald-400 mb-6 text-center">
          📦 List a New Item
        </h1>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            name="title"
            type="text"
            placeholder="Item Title"
            value={form.title}
            onChange={handleChange}
            required
            className="bg-[#2c2c2c] p-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="bg-[#2c2c2c] p-2 rounded"
          />

          <input
            name="category"
            placeholder="Category (e.g., Tops)"
            value={form.category}
            onChange={handleChange}
            required
            className="bg-[#2c2c2c] p-2 rounded"
          />
          <input
            name="type"
            placeholder="Type (e.g., Hoodie, Shirt)"
            value={form.type}
            onChange={handleChange}
            className="bg-[#2c2c2c] p-2 rounded"
          />
          <input
            name="size"
            placeholder="Size (S, M, L, XL)"
            value={form.size}
            onChange={handleChange}
            className="bg-[#2c2c2c] p-2 rounded"
          />
          <input
            name="condition"
            placeholder="Condition (New, Used)"
            value={form.condition}
            onChange={handleChange}
            className="bg-[#2c2c2c] p-2 rounded"
          />
          <input
            name="tags"
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={handleChange}
            className="bg-[#2c2c2c] p-2 rounded"
          />

          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="bg-[#2c2c2c] p-2 rounded text-white"
          />
          <div className="flex flex-wrap gap-2">
            {form.images.map((img, i) => (
              <img key={i} src={img} alt="preview" className="w-16 h-16 rounded" />
            ))}
          </div>

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 rounded py-2 px-4 text-white font-semibold transition"
          >
            {loading ? 'Uploading...' : 'Submit Item'}
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
