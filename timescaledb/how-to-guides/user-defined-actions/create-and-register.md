---
title: Create and register user-defined actions
excerpt: Add a user-defined action to your database
keywords: [actions]
tags: [user-defined actions, scheduled jobs, background jobs, automation framework]
---

# Create and register user-defined actions

Adding a user-defined action to your database is a 2-step process:

1.  [Define a function or procedure](#define-a-function-or-procedure)
1.  [Register your action with the job scheduler](#register-an-action)

## Define a function or procedure

To create an action, first write the commands you want your
[function][postgres-createfunction] or [procedure][postgres-createprocedure] to
execute. Then wrap your commands in a `CREATE OR REPLACE` statement. You can
also define the language of your commands in this statement. The example below
uses PLPGSQL.

The outer statement contains the action signature: `(job_id INT, config JSONB)`.
You must include this signature even if you don't need to use those arguments in
your action. Include it literally, don't replace it with an actual job ID or config
object. When you register the job, you can define the config.
The job ID is automatically generated.

This example defines a simple procedure that raises a notice. Replace
the `RAISE NOTICE` command with the commands you want to run.

<procedure>

## Defining a procedure

1.  Write the commands you want your job to run. For example:

    ```sql
    BEGIN
        RAISE NOTICE 'Executing job % with config %', job_id, config;
    END
    ```

1.  Wrap the commands in a `CREATE OR REPLACE PROCEDURE` statement. For example:

    ```sql
    CREATE OR REPLACE PROCEDURE user_defined_action(job_id INT, config JSONB)
        LANGUAGE PLPGSQL AS
        $$
        BEGIN
            RAISE NOTICE 'Executing job % with config %', job_id, config;
        END
        $$;
    ```

</procedure>

## Register an action

To make the job scheduler run your action, you need to register it. Use the
[`add_job`][api-add_job] function. Supply the name of your action, the schedule
you want it to run on, and the content of your config. If your job needs no
parameters, use a NULL config.

<procedure>

## Registering an action

1.  Add a job for your user-defined action. For example:

    ```sql
    SELECT add_job('user_defined_action', '1h', config => '{"hypertable":"metr"}');
    ```

1.  The `add_job` call returns a `job_id`. It stores the `job_id` and `config`
    in the TimescaleDB catalog.
1.  The action runs on schedule. It also runs when you manually start it by
    calling [`run_job`][api-run_job] with the `job_id`. When it runs, the
    `job_id` and `config` are passed as arguments to the procedure.

</procedure>

## List current jobs

To list all currently registered jobs, query
[`timescaledb_information.jobs`][api-timescaledb_information-jobs].

```sql
SELECT * FROM timescaledb_information.jobs;
```

[api-add_job]: /api/:currentVersion:/actions/add_job
[api-run_job]: /api/:currentVersion:/actions/run_job
[api-timescaledb_information-jobs]: /api/:currentVersion:/informational-views/jobs/
[postgres-createfunction]: https://www.postgresql.org/docs/current/sql-createfunction.html
[postgres-createprocedure]: https://www.postgresql.org/docs/current/sql-createprocedure.html
