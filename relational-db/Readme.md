# Relational Database Setup

Set up a SQL database (MySQL or PostgreSQL).

## Schema Design

Create a schema for a social network with tables such as:

- Users
- Profiles
- Posts
- Photos
- Followers/Following

→ Define relationships between these entities.

## Data Operations

Insert data into Users and Profiles within a single transaction.

## Entity Relationships

| Entities                            | Relationship | Explanation                                                          |
| ----------------------------------- | ------------ | -------------------------------------------------------------------- |
| Users → Profiles                    | 1 : 1        | Each user has exactly one profile.                                   |
| User → Posts                    | 1 : N        | One user can have multiple posts.                                 |
| user → Photos                   | 1 : N        | One user can have multiple photos.                                |
| Users ↔ Users (Followers/Following) | N : N        | A user can follow many users and can also be followed by many users. |
