export const keywords: string[] = [
  // https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#reserved_keywords
  'ALL',
  'AND',
  'ANY',
  'AS',
  'ASC',
  'ASSERT_ROWS_MODIFIED',
  'AT',
  'BETWEEN',
  'BY',
  'CASE',
  'CAST',
  'COLLATE',
  'CONTAINS',
  'CREATE',
  'CROSS',
  'CUBE',
  'CURRENT',
  'DEFAULT',
  'DEFINE',
  'DESC',
  'DISTINCT',
  'ELSE',
  'END',
  'ENUM',
  'ESCAPE',
  'EXCEPT',
  'EXCLUDE',
  'EXISTS',
  'EXTRACT',
  'FALSE',
  'FETCH',
  'FOLLOWING',
  'FOR',
  'FROM',
  'FULL',
  'GROUP',
  'GROUPING',
  'GROUPS',
  'HASH',
  'HAVING',
  'IF',
  'IGNORE',
  'IN',
  'INNER',
  'INTERSECT',
  'INTO',
  'IS',
  'JOIN',
  'LATERAL',
  'LEFT',
  'LIMIT',
  'LOOKUP',
  'MERGE',
  'NATURAL',
  'NEW',
  'NO',
  'NOT',
  'NULL',
  'NULLS',
  'OF',
  'ON',
  'OR',
  'ORDER',
  'OUTER',
  'OVER',
  'PARTITION',
  'PRECEDING',
  'PROTO',
  'RANGE',
  'RECURSIVE',
  'RESPECT',
  'RIGHT',
  'ROLLUP',
  'ROWS',
  'SELECT',
  'SET',
  'SOME',
  'TABLE',
  'TABLESAMPLE',
  'THEN',
  'TO',
  'TREAT',
  'TRUE',
  'UNBOUNDED',
  'UNION',
  'UNNEST',
  'USING',
  'WHEN',
  'WHERE',
  'WINDOW',
  'WITH',
  'WITHIN',

  // misc
  'SAFE',

  // https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language
  'LIKE', // CREATE TABLE LIKE
  'COPY', // CREATE TABLE COPY
  'CLONE', // CREATE TABLE CLONE
  'IN',
  'OUT',
  'INOUT',
  'RETURNS',
  'LANGUAGE',
  'CASCADE',
  'RESTRICT',
  'DETERMINISTIC',
];

export const dataTypes: string[] = [
  'ARRAY', // parametric, ARRAY<T>
  'BOOL',
  'BYTES', // parameterised, BYTES(Length)
  'DATE',
  'DATETIME',
  'GEOGRAPHY',
  'INTERVAL',
  'INT64',
  'INT',
  'SMALLINT',
  'INTEGER',
  'BIGINT',
  'TINYINT',
  'BYTEINT',
  'NUMERIC', // parameterised, NUMERIC(Precision[, Scale])
  'DECIMAL', // parameterised, DECIMAL(Precision[, Scale])
  'BIGNUMERIC', // parameterised, BIGNUMERIC(Precision[, Scale])
  'BIGDECIMAL', // parameterised, BIGDECIMAL(Precision[, Scale])
  'FLOAT64',
  'STRING', // parameterised, STRING(Length)
  'STRUCT', // parametric, STRUCT<T>
  'TIME',
  'TIMEZONE',

  // https://cloud.google.com/bigquery/docs/reference/standard-sql/conversion_functions#formatting_syntax
  'HEX',
  'BASEX',
  'BASE64M',
  'ASCII',
  'UTF-8',
  'UTF8',
];
