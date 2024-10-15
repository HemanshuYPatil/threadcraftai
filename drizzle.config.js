export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://ThreadAI_owner:SfQrvp1I2NPH@ep-lucky-rain-a5ncma9l.us-east-2.aws.neon.tech/ThreadAI?sslmode=require",
    connectionString:
      "postgresql://ThreadAI_owner:SfQrvp1I2NPH@ep-lucky-rain-a5ncma9l.us-east-2.aws.neon.tech/ThreadAI?sslmode=require",
  },
};
