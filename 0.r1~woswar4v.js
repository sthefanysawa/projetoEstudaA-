;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="8f4884ed-aa07-035b-2b39-9983962d2b11")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41431,e=>{"use strict";var t=e.i(69235);e.i(767460);var n=e.i(504037),a=e.i(168558);e.s(["useAIGatewayData",0,({projectId:e,enabled:r=!0})=>(0,t.useQuery)({queryKey:a.projectKeys.integration(e??"","ai_gateway"),queryFn:async()=>(0,n.getGoApi)().get(`/projects/${e}/integrations/ai_gateway`),enabled:r&&!!e})])},364817,363743,e=>{"use strict";var t=e.i(418883),n=e.i(69235),a=e.i(961078),r=e.i(753296);let o=/\{[^{}]+\}/g;function i(e,t,n){if(null==t)return"";if("object"==typeof t)throw Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");return`${e}=${n?.allowReserved===!0?t:encodeURIComponent(t)}`}function s(e,t,n){if(!t||"object"!=typeof t)return"";let a=[],r={simple:",",label:".",matrix:";"}[n.style]||"&";if("deepObject"!==n.style&&!1===n.explode){for(let e in t)a.push(e,!0===n.allowReserved?t[e]:encodeURIComponent(t[e]));let r=a.join(",");switch(n.style){case"form":return`${e}=${r}`;case"label":return`.${r}`;case"matrix":return`;${e}=${r}`;default:return r}}for(let r in t){let o="deepObject"===n.style?`${e}[${r}]`:r;a.push(i(o,t[r],n))}let o=a.join(r);return"label"===n.style||"matrix"===n.style?`${r}${o}`:o}function l(e,t,n){if(!Array.isArray(t))return"";if(!1===n.explode){let a={form:",",spaceDelimited:"%20",pipeDelimited:"|"}[n.style]||",",r=(!0===n.allowReserved?t:t.map(e=>encodeURIComponent(e))).join(a);switch(n.style){case"simple":return r;case"label":return`.${r}`;case"matrix":return`;${e}=${r}`;default:return`${e}=${r}`}}let a={simple:",",label:".",matrix:";"}[n.style]||"&",r=[];for(let a of t)"simple"===n.style||"label"===n.style?r.push(!0===n.allowReserved?a:encodeURIComponent(a)):r.push(i(e,a,n));return"label"===n.style||"matrix"===n.style?`${a}${r.join(a)}`:r.join(a)}function c(e){return function(t){let n=[];if(t&&"object"==typeof t)for(let a in t){let r=t[a];if(null!=r){if(Array.isArray(r)){if(0===r.length)continue;n.push(l(a,r,{style:"form",explode:!0,...e?.array,allowReserved:e?.allowReserved||!1}));continue}if("object"==typeof r){n.push(s(a,r,{style:"deepObject",explode:!0,...e?.object,allowReserved:e?.allowReserved||!1}));continue}n.push(i(a,r,e))}}return n.join("&")}}function u(e,t){return e instanceof FormData?e:t&&"application/x-www-form-urlencoded"===(t.get instanceof Function?t.get("Content-Type")??t.get("content-type"):t["Content-Type"]??t["content-type"])?new URLSearchParams(e).toString():JSON.stringify(e)}function d(...e){let t=new Headers;for(let n of e)if(n&&"object"==typeof n)for(let[e,a]of n instanceof Headers?n.entries():Object.entries(n))if(null===a)t.delete(e);else if(Array.isArray(a))for(let n of a)t.append(e,n);else void 0!==a&&t.set(e,a);return t}function p(e){return e.endsWith("/")?e.substring(0,e.length-1):e}var m=e.i(900147);e.i(767460);var f=e.i(64244),y=e.i(872669),E=e.i(264337),_=e.i(722419),b=e.i(170351),g=e.i(159770),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),S=Object.freeze(Object.defineProperties(["",""],{raw:{value:Object.freeze(["",""])}})),A=function(){function e(){for(var t=this,n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];if(!(this instanceof e))throw TypeError("Cannot call a class as a function");return this.tag=function(e){for(var n=arguments.length,a=Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return"function"==typeof e?t.interimTag.bind(t,e):"string"==typeof e?t.transformEndResult(e):(e=e.map(t.transformString.bind(t)),t.transformEndResult(e.reduce(t.processSubstitutions.bind(t,a))))},a.length>0&&Array.isArray(a[0])&&(a=a[0]),this.transformers=a.map(function(e){return"function"==typeof e?e():e}),this.tag}return h(e,[{key:"interimTag",value:function(e,t){for(var n=arguments.length,a=Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return this.tag(S,e.apply(void 0,[t].concat(a)))}},{key:"processSubstitutions",value:function(e,t,n){var a=this.transformSubstitution(e.shift(),t);return"".concat(t,a,n)}},{key:"transformString",value:function(e){return this.transformers.reduce(function(e,t){return t.onString?t.onString(e):e},e)}},{key:"transformSubstitution",value:function(e,t){return this.transformers.reduce(function(e,n){return n.onSubstitution?n.onSubstitution(e,t):e},e)}},{key:"transformEndResult",value:function(e){return this.transformers.reduce(function(e,t){return t.onEndResult?t.onEndResult(e):e},e)}}]),e}();let N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(t){if(""===e)return t.trim();if("start"===(e=e.toLowerCase())||"left"===e)return t.replace(/^\s*/,"");if("end"===e||"right"===e)return t.replace(/\s*$/,"");throw Error("Side not supported: "+e)}}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(t){if("initial"===e){var n=t.match(/^[^\S\n]*(?=\S)/gm),a=n&&Math.min.apply(Math,function(e){if(!Array.isArray(e))return Array.from(e);for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}(n.map(function(e){return e.length})));if(a){var r=RegExp("^.{"+a+"}","gm");return t.replace(r,"")}return t}if("all"===e)return t.replace(/^[^\S\n]+/gm,"");throw Error("Unknown type: "+e)}}},w=function(e,t){return{onEndResult:function(n){if(null==e||null==t)throw Error("replaceResultTransformer requires at least 2 arguments.");return n.replace(e,t)}}},T=function(e,t){return{onSubstitution:function(n,a){if(null==e||null==t)throw Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==n?n:n.toString().replace(e,t)}}};var O={separator:"",conjunction:"",serial:!1};let v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return{onSubstitution:function(t,n){if(Array.isArray(t)){var a=t.length,r=e.separator,o=e.conjunction,i=e.serial,s=n.match(/(\n?[^\S\n]+)$/);if(t=s?t.join(r+s[1]):t.join(r+" "),o&&a>1){var l=t.lastIndexOf(r);t=t.slice(0,l)+(i?r:"")+" "+o+t.slice(l+1)}}return t}}},j=function(e){return{onSubstitution:function(t,n){if(null!=e&&"string"==typeof e)"string"==typeof t&&t.includes(e)&&(t=t.split(e));else throw Error("You need to specify a string character to split by.");return t}}};var C=function(e){return null!=e&&!Number.isNaN(e)&&"boolean"!=typeof e};new A(v({separator:","}),R,N),new A(v({separator:",",conjunction:"and"}),R,N),new A(v({separator:",",conjunction:"or"}),R,N),new A(j("\n"),function(){return{onSubstitution:function(e){return Array.isArray(e)?e.filter(C):C(e)?e:""}}},v,R,N),new A(j("\n"),v,R,N,T(/&/g,"&amp;"),T(/</g,"&lt;"),T(/>/g,"&gt;"),T(/"/g,"&quot;"),T(/'/g,"&#x27;"),T(/`/g,"&#x60;")),new A(w(/(?:\n(?:\s*))+/g," "),N),new A(w(/(?:\n\s*)/g,""),N),new A(v({separator:","}),w(/(?:\s+)/g," "),N),new A(v({separator:",",conjunction:"or"}),w(/(?:\s+)/g," "),N),new A(v({separator:",",conjunction:"and"}),w(/(?:\s+)/g," "),N),new A(v,R,N),new A(v,w(/(?:\s+)/g," "),N);var D=new A(R,N);new A(R("all"),N);let I=`
-- Adapted from information_schema.columns

SELECT
  c.oid :: int8 AS table_id,
  nc.nspname AS schema,
  c.relname AS table,
  (c.oid || '.' || a.attnum) AS id,
  a.attnum AS ordinal_position,
  a.attname AS name,
  CASE
    WHEN a.atthasdef THEN regexp_replace(pg_get_expr(ad.adbin, ad.adrelid), '::[a-zA-Z0-9_ ]+$', '')
    ELSE NULL
  END AS default_value,
  CASE
    WHEN t.typtype = 'd' THEN CASE
      WHEN bt.typelem <> 0 :: oid
      AND bt.typlen = -1 THEN 'ARRAY'
      WHEN nbt.nspname = 'pg_catalog' THEN format_type(t.typbasetype, NULL)
      ELSE 'USER-DEFINED'
    END
    ELSE CASE
      WHEN t.typelem <> 0 :: oid
      AND t.typlen = -1 THEN 'ARRAY'
      WHEN nt.nspname = 'pg_catalog' THEN format_type(a.atttypid, NULL)
      ELSE 'USER-DEFINED'
    END
  END AS data_type,
  COALESCE(bt.typname, t.typname) AS format,
  a.attidentity IN ('a', 'd') AS is_identity,
  CASE
    a.attidentity
    WHEN 'a' THEN 'ALWAYS'
    WHEN 'd' THEN 'BY DEFAULT'
    ELSE NULL
  END AS identity_generation,
  a.attgenerated IN ('s') AS is_generated,
  NOT (
    a.attnotnull
    OR t.typtype = 'd' AND t.typnotnull
  ) AS is_nullable,
  (
    c.relkind IN ('r', 'p')
    OR c.relkind IN ('v', 'f') AND pg_column_is_updatable(c.oid, a.attnum, FALSE)
  ) AS is_updatable,
  uniques.table_id IS NOT NULL AS is_unique,
  check_constraints.definition AS "check",
  array_to_json(
    array(
      SELECT
        enumlabel
      FROM
        pg_catalog.pg_enum enums
      WHERE
        enums.enumtypid = coalesce(bt.oid, t.oid)
        OR enums.enumtypid = coalesce(bt.typelem, t.typelem)
      ORDER BY
        enums.enumsortorder
    )
  ) AS enums,
  col_description(c.oid, a.attnum) AS comment
FROM
  pg_attribute a
  LEFT JOIN pg_attrdef ad ON a.attrelid = ad.adrelid
  AND a.attnum = ad.adnum
  JOIN (
    pg_class c
    JOIN pg_namespace nc ON c.relnamespace = nc.oid
  ) ON a.attrelid = c.oid
  JOIN (
    pg_type t
    JOIN pg_namespace nt ON t.typnamespace = nt.oid
  ) ON a.atttypid = t.oid
  LEFT JOIN (
    pg_type bt
    JOIN pg_namespace nbt ON bt.typnamespace = nbt.oid
  ) ON t.typtype = 'd'
  AND t.typbasetype = bt.oid
  LEFT JOIN (
    SELECT DISTINCT ON (table_id, ordinal_position)
      conrelid AS table_id,
      conkey[1] AS ordinal_position
    FROM pg_catalog.pg_constraint
    WHERE contype = 'u' AND cardinality(conkey) = 1
  ) AS uniques ON uniques.table_id = c.oid AND uniques.ordinal_position = a.attnum
  LEFT JOIN (
    -- We only select the first column check
    SELECT DISTINCT ON (table_id, ordinal_position)
      conrelid AS table_id,
      conkey[1] AS ordinal_position,
      substring(
        pg_get_constraintdef(pg_constraint.oid, true),
        8,
        length(pg_get_constraintdef(pg_constraint.oid, true)) - 8
      ) AS "definition"
    FROM pg_constraint
    WHERE contype = 'c' AND cardinality(conkey) = 1
    ORDER BY table_id, ordinal_position, oid asc
  ) AS check_constraints ON check_constraints.table_id = c.oid AND check_constraints.ordinal_position = a.attnum
WHERE
  NOT pg_is_other_temp_schema(nc.oid)
  AND a.attnum > 0
  AND NOT a.attisdropped
  AND (c.relkind IN ('r', 'v', 'm', 'f', 'p'))
  AND (
    pg_has_role(c.relowner, 'USAGE')
    OR has_column_privilege(
      c.oid,
      a.attnum,
      'SELECT, INSERT, UPDATE, REFERENCES'
    )
  )
`,L=`
SELECT
    nc.nspname AS schema,
    c.relname AS name,
    CASE WHEN c.relkind = 'v' THEN true ELSE false END AS is_view,
    CASE WHEN c.relkind = 'v' THEN 0 ELSE pg_stat_get_live_tuples(c.oid) END AS live_rows_estimate
FROM
    pg_class c
    JOIN pg_namespace nc ON c.relnamespace = nc.oid
WHERE
    c.relkind IN ('r', 'p', 'v')
    AND NOT pg_is_other_temp_schema(nc.oid)
    AND (
      pg_has_role(c.relowner, 'USAGE')
      OR has_table_privilege(
        c.oid,
        'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
      )
      OR has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
    )
ORDER BY
    nc.nspname,
    c.relname
`,q=["information_schema","pg_catalog","pg_toast","_timescaledb_internal"];function $(e=[]){let t="",n=I+(t=e.length>0?`AND nc.nspname in (${e.map(e=>`'${e}'`).join(",")})`:`AND nc.nspname not in (${q.map(e=>`'${e}'`).join(",")})`),a=D`
    with
      tables as (${L}),
      columns as (${n}),
      table_columns as (
        select
          t.*,
          coalesce(
            json_agg(
              json_build_object(
                'name', c.name,
                'data_type', c.data_type,
                'is_nullable', c.is_nullable,
                'default_value', c.default_value,
                'ordinal_position', c.ordinal_position
              ) order by c.ordinal_position
            ) filter (where c.name is not null),
            '[]'::json
          ) as columns
        from tables t
        left join columns c on c.schema = t.schema and c.table = t.name
        group by t.schema, t.name, t.is_view, t.live_rows_estimate
      )
    select
      *
    from table_columns
  `;return a+="\n",e.length>0?a+=`where schema in (${e.map(e=>`quote_ident('${e}')`).join(",")})`:a+=`where schema not in (${q.map(e=>`'${e}'`).join(",")})`,a}e.s(["listTableInfoSql",0,function(e,t=[]){let n,a=D`
    with
      tables as (${`
SELECT
  c.oid :: int8 AS id,
  nc.nspname AS schema,
  c.relname AS name,
  c.relrowsecurity AS rls_enabled,
  c.relforcerowsecurity AS rls_forced,
  CASE
    WHEN c.relreplident = 'd' THEN 'DEFAULT'
    WHEN c.relreplident = 'i' THEN 'INDEX'
    WHEN c.relreplident = 'f' THEN 'FULL'
    ELSE 'NOTHING'
  END AS replica_identity,
  pg_total_relation_size(format('%I.%I', nc.nspname, c.relname)) :: int8 AS bytes,
  pg_size_pretty(
    pg_total_relation_size(format('%I.%I', nc.nspname, c.relname))
  ) AS size,
  pg_stat_get_live_tuples(c.oid) AS live_rows_estimate,
  pg_stat_get_dead_tuples(c.oid) AS dead_rows_estimate,
  obj_description(c.oid) AS comment,
  coalesce(pk.primary_keys, '[]') as primary_keys,
  coalesce(
    jsonb_agg(relationships) filter (where relationships is not null),
    '[]'
  ) as relationships
FROM
  pg_namespace nc
  JOIN pg_class c ON nc.oid = c.relnamespace
  left join (
    select
      table_id,
      jsonb_agg(_pk.*) as primary_keys
    from (
      select
        n.nspname as schema,
        c.relname as table_name,
        a.attname as name,
        c.oid :: int8 as table_id
      from
        pg_index i,
        pg_class c,
        pg_attribute a,
        pg_namespace n
      where
        i.indrelid = c.oid
        and c.relnamespace = n.oid
        and a.attrelid = c.oid
        and a.attnum = any (i.indkey)
        and i.indisprimary
    ) as _pk
    group by table_id
  ) as pk
  on pk.table_id = c.oid
  left join (
    select
      c.oid :: int8 as id,
      c.conname as constraint_name,
      nsa.nspname as source_schema,
      csa.relname as source_table_name,
      sa.attname as source_column_name,
      nta.nspname as target_table_schema,
      cta.relname as target_table_name,
      ta.attname as target_column_name
    from
      pg_constraint c
    join (
      pg_attribute sa
      join pg_class csa on sa.attrelid = csa.oid
      join pg_namespace nsa on csa.relnamespace = nsa.oid
    ) on sa.attrelid = c.conrelid and sa.attnum = any (c.conkey)
    join (
      pg_attribute ta
      join pg_class cta on ta.attrelid = cta.oid
      join pg_namespace nta on cta.relnamespace = nta.oid
    ) on ta.attrelid = c.confrelid and ta.attnum = any (c.confkey)
    where
      c.contype = 'f'
  ) as relationships
  on (relationships.source_schema = nc.nspname and relationships.source_table_name = c.relname)
  or (relationships.target_table_schema = nc.nspname and relationships.target_table_name = c.relname)
WHERE
  c.relkind IN ('r', 'p')
  AND NOT pg_is_other_temp_schema(nc.oid)
  AND c.relname = quote_ident('${e}')
  AND (
    pg_has_role(c.relowner, 'USAGE')
    OR has_table_privilege(
      c.oid,
      'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
    )
    OR has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
  )
group by
  c.oid,
  c.relname,
  c.relrowsecurity,
  c.relforcerowsecurity,
  c.relreplident,
  nc.nspname,
  pk.primary_keys
`}),
      columns as (${I})
    select
      *,
      ${(n="columns",D`
    COALESCE(
      (
        SELECT
          array_agg(row_to_json(${n})) FILTER (WHERE ${"columns.table_id = tables.id"})
        FROM
          ${n}
      ),
      '{}'
    ) AS ${n}
  `)}
    from tables
  `;return a+="\n",t.length>0?a+=`where schema in (${t.map(e=>`quote_ident('${e}')`).join(",")})`:a+=`where schema not in (${q.map(e=>`'${e}'`).join(",")})`,a},"listTablesNameRowCountSql",0,$],363743);let k=D`
  SELECT
    schemaname,
    tablename,
    policyname,
    roles,
    cmd,
    qual,
    with_check
  FROM pg_policies
  WHERE schemaname = 'public'
  ORDER BY tablename, policyname;
`,H=D`
  SELECT
    schemaname,
    tablename,
    policyname,
    roles,
    cmd,
    qual,
    with_check
  FROM pg_policies
  WHERE schemaname = 'storage' AND tablename = 'objects'
  ORDER BY policyname;
`,F=D`
  SELECT
    schemaname,
    tablename,
    policyname,
    roles,
    cmd,
    qual,
    with_check
  FROM pg_policies
  WHERE schemaname = 'realtime' AND tablename = 'messages'
  ORDER BY policyname;
`;D`
  SELECT
    c.oid :: int8 AS id,
    nc.nspname AS schema,
    c.relname AS name,
    c.relrowsecurity AS rls_enabled,
    pg_stat_get_live_tuples(c.oid) AS live_rows_estimate
  FROM
    pg_class c
    JOIN pg_namespace nc ON c.relnamespace = nc.oid
  WHERE
    nc.nspname = 'public'
    AND c.relkind IN ('r', 'p', 'v')
  ORDER BY c.relname;
`;let U=(0,f.getApiConfig)().getBaseUrl(),P=()=>{let e=(0,_.useProjectStore)(e=>e.project?.id),{selectedInstance:t}=(0,_.useSelectedCloudInstance)();return(0,m.useMemo)(()=>e?function(e){let{baseUrl:t="",Request:n=globalThis.Request,fetch:a=globalThis.fetch,querySerializer:m,bodySerializer:f,headers:y,requestInitExt:E,..._}={...e};E="object"==typeof r.default&&Number.parseInt(r.default?.versions?.node?.substring(0,2))>=18&&r.default.versions.undici?E:void 0,t=p(t);let b=[];async function g(e,r){var g,h;let S,A,N,R,w,{baseUrl:T,fetch:O=a,Request:v=n,headers:j,params:C={},parseAs:D="json",querySerializer:I,bodySerializer:L=f??u,body:q,...$}=r||{},k=t;T&&(k=p(T)??t);let H="function"==typeof m?m:c(m);I&&(H="function"==typeof I?I:c({..."object"==typeof m?m:{},...I}));let F=void 0===q?void 0:L(q,d(y,j,C.header)),U=d(void 0===F||F instanceof FormData?{}:{"Content-Type":"application/json"},y,j,C.header),P={redirect:"follow",..._,...$,body:F,headers:U},W=new n((g=e,h={baseUrl:k,params:C,querySerializer:H},S=`${h.baseUrl}${g}`,h.params?.path&&(S=function(e,t){let n=e;for(let a of e.match(o)??[]){let e=a.substring(1,a.length-1),r=!1,o="simple";if(e.endsWith("*")&&(r=!0,e=e.substring(0,e.length-1)),e.startsWith(".")?(o="label",e=e.substring(1)):e.startsWith(";")&&(o="matrix",e=e.substring(1)),!t||void 0===t[e]||null===t[e])continue;let c=t[e];if(Array.isArray(c)){n=n.replace(a,l(e,c,{style:o,explode:r}));continue}if("object"==typeof c){n=n.replace(a,s(e,c,{style:o,explode:r}));continue}if("matrix"===o){n=n.replace(a,`;${i(e,c)}`);continue}n=n.replace(a,"label"===o?`.${encodeURIComponent(c)}`:encodeURIComponent(c))}return n}(S,h.params.path)),(A=h.querySerializer(h.params.query??{})).startsWith("?")&&(A=A.substring(1)),A&&(S+=`?${A}`),S),P);for(let e in $)e in W||(W[e]=$[e]);if(b.length){for(let t of(N=Math.random().toString(36).slice(2,11),R=Object.freeze({baseUrl:k,fetch:O,parseAs:D,querySerializer:H,bodySerializer:L}),b))if(t&&"object"==typeof t&&"function"==typeof t.onRequest){let a=await t.onRequest({request:W,schemaPath:e,params:C,options:R,id:N});if(a)if(a instanceof n)W=a;else if(a instanceof Response){w=a;break}else throw Error("onRequest: must return new Request() or Response() when modifying the request")}}if(!w){try{w=await O(W,E)}catch(n){let t=n;if(b.length)for(let n=b.length-1;n>=0;n--){let a=b[n];if(a&&"object"==typeof a&&"function"==typeof a.onError){let n=await a.onError({request:W,error:t,schemaPath:e,params:C,options:R,id:N});if(n){if(n instanceof Response){t=void 0,w=n;break}if(n instanceof Error){t=n;continue}throw Error("onError: must return new Response() or instance of Error")}}}if(t)throw t}if(b.length)for(let t=b.length-1;t>=0;t--){let n=b[t];if(n&&"object"==typeof n&&"function"==typeof n.onResponse){let t=await n.onResponse({request:W,response:w,schemaPath:e,params:C,options:R,id:N});if(t){if(!(t instanceof Response))throw Error("onResponse: must return new Response() when modifying the response");w=t}}}}if(204===w.status||"HEAD"===W.method||"0"===w.headers.get("Content-Length"))return w.ok?{data:void 0,response:w}:{error:void 0,response:w};if(w.ok)return"stream"===D?{data:w.body,response:w}:{data:await w[D](),response:w};let M=await w.text();try{M=JSON.parse(M)}catch{}return{error:M,response:w}}return{request:(e,t,n)=>g(t,{...n,method:e.toUpperCase()}),GET:(e,t)=>g(e,{...t,method:"GET"}),PUT:(e,t)=>g(e,{...t,method:"PUT"}),POST:(e,t)=>g(e,{...t,method:"POST"}),DELETE:(e,t)=>g(e,{...t,method:"DELETE"}),OPTIONS:(e,t)=>g(e,{...t,method:"OPTIONS"}),HEAD:(e,t)=>g(e,{...t,method:"HEAD"}),PATCH:(e,t)=>g(e,{...t,method:"PATCH"}),TRACE:(e,t)=>g(e,{...t,method:"TRACE"}),use(...e){for(let t of e)if(t){if("object"!=typeof t||!("onRequest"in t||"onResponse"in t||"onError"in t))throw Error("Middleware must be an object with one of `onRequest()`, `onResponse() or `onError()`");b.push(t)}},eject(...e){for(let t of e){let e=b.indexOf(t);-1!==e&&b.splice(e,1)}}}}({baseUrl:`${U}/projects/${e}/cloud/db-proxy`,fetch:async e=>{let n=await g.tokenManager.getValidToken();if(!n)throw Error("No token available");let a=new URL(e.url);a.searchParams.set("env",t);let r=new Headers(e.headers);for(let[e,t]of(r.set("Authorization",`Bearer ${n}`),Object.entries((0,y.getApiEnvironmentHeaders)())))r.set(e,t);let o=null;return"GET"!==e.method&&"HEAD"!==e.method&&(o=await e.clone().text()),fetch(a.toString(),{method:e.method,headers:r,body:o})}}):null,[e,t])},W=async({projectRef:e,query:t,readOnly:n,dbClient:a,signal:r})=>{let{data:o,error:i}=await a.POST("/v1/projects/{ref}/database/query",{params:{path:{ref:e}},body:{query:t,read_only:n},signal:r});if(i)throw i;return o},M=async(e,t,n)=>{let a=`SELECT COUNT(*) AS total FROM ${t}`,r=await W({projectRef:e,query:a,readOnly:!0,dbClient:n});return r?.[0]?.total??0},x=async(e,t)=>{let{data:n,error:a}=await t.GET("/v1/projects/{ref}/functions",{params:{path:{ref:e}}});if(a)throw a;return n??[]},z=async(e,t)=>W({projectRef:e,query:k,readOnly:!0,dbClient:t}),G=async(e,t)=>W({projectRef:e,query:H,readOnly:!0,dbClient:t}),K=async(e,t)=>W({projectRef:e,query:F,readOnly:!0,dbClient:t}),B=async({projectRef:e,dbClient:t})=>{let{data:n,error:a}=await t.POST("/v1/projects/{ref}/restore",{params:{path:{ref:e}}});if(a)throw a;return n};e.s(["useGetRLSPolicies",0,e=>{let t=P(),{selectedInstance:a}=(0,_.useSelectedCloudInstance)();return(0,n.useQuery)({queryKey:b.cloudKeys.database.rlsPolicies(e,a),queryFn:()=>{if(!t)throw Error("Database client not available");return z(e,t)},enabled:!!e&&!!t,retry:!1})},"useGetRealtimePolicies",0,e=>{let t=P(),{selectedInstance:a}=(0,_.useSelectedCloudInstance)();return(0,n.useQuery)({queryKey:b.cloudKeys.database.realtimePolicies(e,a),queryFn:()=>{if(!t)throw Error("Database client not available");return K(e,t)},enabled:!!e&&!!t,retry:!1})},"useGetStoragePolicies",0,e=>{let t=P(),{selectedInstance:a}=(0,_.useSelectedCloudInstance)();return(0,n.useQuery)({queryKey:b.cloudKeys.database.storagePolicies(e,a),queryFn:()=>{if(!t)throw Error("Database client not available");return G(e,t)},enabled:!!e&&!!t,retry:!1})},"useGetTableCount",0,(e,t)=>{let a=P(),{selectedInstance:r}=(0,_.useSelectedCloudInstance)();return(0,n.useQuery)({queryKey:b.cloudKeys.database.tableCount(e,r,t),queryFn:()=>{if(!a)throw Error("Database client not available");return M(e,t,a)},enabled:!!e&&!!t&&!!a,retry:!1})},"useGetUserCountsByDay",0,(e,t)=>{let a=P(),{selectedInstance:r}=(0,_.useSelectedCloudInstance)();return(0,n.useQuery)({queryKey:b.cloudKeys.database.userCounts(e,r,t),queryFn:()=>(({projectRef:e,days:t,dbClient:n})=>W({projectRef:e,query:`
    WITH days_series AS (
      SELECT generate_series(
        date_trunc('day', now() - interval '${Number(t)-1} days'),
        date_trunc('day', now()),
        '1 day'::interval
      )::date AS date
    )
    SELECT
      d.date,
      COALESCE(u.users, 0)::int as users
    FROM
      days_series d
    LEFT JOIN (
      SELECT
        date_trunc('day', created_at AT TIME ZONE 'UTC')::date as date,
        count(id) as users
      FROM
        auth.users
      GROUP BY 1
    ) u ON d.date = u.date
    ORDER BY
      d.date ASC;
  `,readOnly:!0,dbClient:n}))({projectRef:e,days:t,dbClient:a}),enabled:!!e&&!!a,retry:!1})},"useListFunctions",0,e=>{let t=P(),{selectedInstance:a}=(0,_.useSelectedCloudInstance)();return(0,n.useQuery)({queryKey:b.cloudKeys.database.functions(e,a),queryFn:()=>{if(!t)throw Error("Database client not available");return x(e,t)},enabled:!!e&&!!t,retry:!1,refetchOnMount:"always"})},"useListTables",0,(e,t)=>{let a=P(),{selectedInstance:r}=(0,_.useSelectedCloudInstance)();return(0,n.useQuery)({queryKey:b.cloudKeys.database.tables(e,r,t),queryFn:()=>(({projectRef:e,schemas:t,dbClient:n})=>W({projectRef:e,query:$(t),readOnly:!0,dbClient:n}))({projectRef:e,schemas:t,dbClient:a}),enabled:!!e&&!!a})},"useRestoreProject",0,()=>{let e=(0,a.useQueryClient)(),n=P(),r=(0,_.useProjectStore)(e=>e.project?.id),{selectedInstance:o}=(0,_.useSelectedCloudInstance)();return(0,t.useMutation)({mutationFn:({projectRef:e})=>{if(!n)throw Error("Database client not available");return B({projectRef:e,dbClient:n})},onSuccess:()=>{e.invalidateQueries({queryKey:b.cloudKeys.status(r,o)})},onError:e=>{(0,E.showErrorToast)(e)},retry:3,retryDelay:e=>Math.min(2e3*2**e,1e4)})},"useRunQuery",0,()=>{let e=P();return(0,t.useMutation)({mutationFn:({projectRef:t,query:n,readOnly:a,signal:r})=>{if(!e)throw Error("Database client not available");return W({projectRef:t,query:n,readOnly:a,dbClient:e,signal:r})},onError:e=>{e instanceof DOMException&&"AbortError"===e.name||(0,E.showErrorToast)(e)}})}],364817)},887587,e=>{"use strict";var t=e.i(163970),n=e.i(722419),a=e.i(880060);e.s(["useConnectedSupabaseProject",0,function(){let e=(0,n.useProjectStore)(e=>e.project),r=e?.supabase_project_config,{selectedInstance:o}=(0,n.useSelectedCloudInstance)(),{supabaseIntegrationData:i}=(0,a.useSupabaseIntegrationData)(e?.id),s=!!e?.supabase_project_config?.supabase_project_id,l=!!r?.supabase_organization_id&&!s,c=!!i?.prod?.supabase_project_id||!!i?.dev?.supabase_project_id,u=!!(e?.workspace_id&&(s||l||c)),d=(0,t.useSupabaseOrganizations)({workspaceId:e?.workspace_id??"",enabled:u}),p=i?.[o]?.supabase_project_id??null;p||(p=e?.supabase_project_config?.supabase_project_id??null);let m=function(e,t){if(e.isLoading||!t||!e.supabaseOrganizations)return!1;if(e.noOrganizations)return!0;let n=e.supabaseOrganizations.find(e=>e.id===t);return!n||"connected"!==n.status}(d,s?r?.supabase_organization_id??null:i?.[o]?.supabase_organization_id??null),f=d.supabaseOrganizations?.flatMap(e=>e.projects||[]);return!m&&f&&p&&f.find(e=>e.id===p)||null}],887587)}]);

//# debugId=8f4884ed-aa07-035b-2b39-9983962d2b11
//# sourceMappingURL=04gux1_etf1io.js.map