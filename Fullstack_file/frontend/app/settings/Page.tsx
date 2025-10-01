'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type Profile = {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
}

export default function SettingsPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProfile = async () => {
      setLoading(true)
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError || !user) {
        console.error('No user logged in:', userError)
        setProfile(null)
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (error) {
        console.error('Error fetching profile:', error)
      } else {
        setProfile({
          id: data.id,
          email: user.email!,
          full_name: data.full_name,
          avatar_url: data.avatar_url,
        })
      }

      setLoading(false)
    }

    getProfile()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setProfile(null)
  }

  if (loading) {
    return <div className="p-6">Loading profile...</div>
  }

  if (!profile) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">Settings</h1>
        <p className="mt-4">You are not logged in.</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="mt-6 space-y-4">
        <p>
          <span className="font-semibold">Email:</span> {profile.email}
        </p>
        {profile.full_name && (
          <p>
            <span className="font-semibold">Full Name:</span> {profile.full_name}
          </p>
        )}
        {profile.avatar_url && (
          <img
            src={profile.avatar_url}
            alt="Avatar"
            className="w-20 h-20 rounded-full border"
          />
        )}
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  )
}
