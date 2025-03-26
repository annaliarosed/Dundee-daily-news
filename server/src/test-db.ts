import mysql from "mysql2/promise";

(async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "rootpass123",
      database: "DUNDEEDAILYDB",
      port: 3306,
    });

    console.log("✅ Direct MySQL connection works!");
    await connection.end();
  } catch (err) {
    console.error("❌ Direct MySQL connection failed:", err);
  }
})();
