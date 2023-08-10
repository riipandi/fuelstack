DO $$ BEGIN
 CREATE TYPE "role" AS ENUM('admin', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v1mc() NOT NULL,
	"tid" varchar(100) NOT NULL,
	"email" varchar NOT NULL,
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"avatar_url" varchar,
	"billing_provider" varchar,
	"billing_address" jsonb DEFAULT '{}'::jsonb,
	"payment_method" jsonb DEFAULT '{}'::jsonb,
	"phone" varchar(20),
	"role" "role" DEFAULT 'user' NOT NULL,
	"password_hash" varchar,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_tid_unique" UNIQUE("tid"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
