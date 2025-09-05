
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background w-full">
      <div className="w-full max-w-md rounded-lg border border-border/10 bg-background p-8 shadow-lg">
        <h2 className="mb-2 text-2xl font-bold">Create an account</h2>
        <p className="mb-6 text-sm text-foreground/70">
          Sign up to start managing your school with ease.
        </p>
        <form  className="space-y-4">
          {/* Full name */}
          <div>
            <label htmlFor="name" className="mb-2 block">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="w-full rounded border border-border bg-background p-2 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground"
              placeholder="Alex Johnson"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full rounded border border-border bg-background p-2 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground"
              placeholder="admin@your-school.edu"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="mb-2 block">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              className="w-full rounded border border-border bg-background p-2 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground"
              placeholder="••••••••"
              required
              minLength={8}
            />
            <p className="mt-1 text-xs text-foreground/60">
              Use 8+ characters with a mix of letters & numbers.
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm" className="mb-2 block">
              Confirm Password
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              autoComplete="new-password"
              className="w-full rounded border border-border bg-background p-2 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground"
              placeholder="••••••••"
              required
              minLength={8}
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="mt-0.5 h-4 w-4 rounded border-border bg-background text-primary"
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <Link href="/terms" className="underline hover:no-underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:no-underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="btn w-full bg-primary">
            Create Account
          </button>
        </form>

        {/* Switch to Login */}
        <div className="mt-6 flex justify-center gap-x-2 text-center">
          <div>Already have an account?</div>
          <Link href="/auth/login" className="cursor-pointer hover:underline">
            Login
          </Link>
        </div>

        {/* School context hint */}
        <p className="mt-4 text-center text-xs text-foreground/60">
          Tip: Add admins and staff later from the dashboard.
        </p>
      </div>
    </div>
  );
}
