# Migration `20201011200940-add_category_to_service`

This migration has been generated by matheusAMDS at 10/11/2020, 5:09:40 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "SCHEMA"."Service" ADD COLUMN "category" text   NOT NULL 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201011023158-init..20201011200940-add_category_to_service
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -69,8 +69,9 @@
   id          Int       @default(autoincrement()) @id
   createdAt   DateTime  @default(now())
   title       String
   description String
+  category    String 
   value       Int
   whatsapp    String
   user        User      @relation(fields: [userId], references: [id])
   userId      Int
```


