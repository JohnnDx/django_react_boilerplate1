export type Plan = "free" | "trial" | "standard" | "premium" | "testing" | "superadmin";

// Define what features each plan unlocks
const planPermissions: Record<Plan, string[]> = {
  free: [],
  trial: ["featureA"], // limited access
  standard: ["featureA"],
  premium: ["featureA", "featureB"],
  testing: ["featureA", "featureB", "featureTest"],
  superadmin: ["featureA", "featureB", "featureTest", "featureAdmin"],
};


export function hasAccess(plan: Plan, feature: string): boolean {
  return planPermissions[plan]?.includes(feature);
}
