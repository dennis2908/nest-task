# scripts/init-db.sh
#!/bin/sh

# Wait for MySQL to be ready
until mysql -h"$DB_HOST" -u"$DB_USERNAME" -p"$DB_PASSWORD" -e "SELECT 1"; do
  >&2 echo "MySQL is unavailable - sleeping"
  sleep 1
done

# Run migrations
npx typeorm migration:run

# Start the application
npm run start:prod