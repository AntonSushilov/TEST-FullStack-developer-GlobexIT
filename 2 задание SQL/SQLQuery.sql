WITH subs AS (
	SELECT 
	id, 
	parent_id, 
	name, 
	1 AS level
    FROM testdb.dbo.subdivisions
    WHERE parent_id = (
		SELECT c.subdivision_id 
		FROM testdb.dbo.collaborators c 
		WHERE c.id = 710253
   )

   UNION ALL

   SELECT 
   tab1.id, 
   tab1.parent_id, 
   tab1.name,
   level+1
   FROM testdb.dbo.subdivisions AS tab1
      JOIN subs
          ON tab1.parent_id = subs.id
)

SELECT
	tab1.id, 
	tab1.name, 
	subs.name as sub_name, 
	subs.id AS sub_id, 
	subs.level AS sub_level, 
	(SELECT COUNT(*) FROM testdb.dbo.collaborators WHERE subdivision_id = subs.id)  AS colls_count 
	FROM subs 
	JOIN testdb.dbo.collaborators tab1
		ON subs.id = tab1.subdivision_id
	WHERE tab1.age < 40 AND subs.id NOT IN (100055, 100059)
	
	ORDER BY subs.level ASC;
;