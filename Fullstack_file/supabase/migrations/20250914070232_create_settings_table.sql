-- Create settings table
create table if not exists settings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  currency text not null default 'USD',
  theme text not null default 'light',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Ensure each user has only one settings row
create unique index if not exists settings_user_id_idx
  on settings(user_id);
