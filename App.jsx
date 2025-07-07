import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { motion } from "framer-motion";

export default function App() {
  const [user, setUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.username && loginForm.password) {
      setUser({ name: loginForm.username });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-red-600">Dragon News</h1>
        <p className="text-gray-600 text-lg">Your Daily Dose of Fiery Updates</p>
      </header>

      {!user ? (
        <section className="max-w-md mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">User Login</h2>
          <form onSubmit={handleLogin} className="grid gap-4">
            <Input
              placeholder="Username"
              value={loginForm.username}
              onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </section>
      ) : (
        <>
          <p className="text-right mb-6 text-sm">Welcome, {user.name}!</p>

          <main className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((id) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.03 }}
                className="transition-transform"
              >
                <Card className="rounded-2xl shadow-md hover:shadow-lg">
                  <CardContent className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Sample Blog Post {id}</h2>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                      lacinia odio vitae vestibulum.
                    </p>
                    <Button className="mt-4">Read More</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </main>

          <section className="mt-12 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Write a Blog Post</h2>
            <form className="grid gap-4">
              <Input placeholder="Post Title" />
              <Textarea placeholder="Write your story..." rows={6} />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </section>
        </>
      )}
    </div>
  );
}