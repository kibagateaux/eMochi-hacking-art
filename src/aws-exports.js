// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
aws_app_analytics : 'enable',
aws_auth_facebook : 'enable',
aws_cloud_logic : 'enable',
aws_cloud_logic_custom : '[{"id":"lcnyvgmw79","name":"dev-djinnii-serverless","description":"","endpoint":"https://lcnyvgmw79.execute-api.us-east-1.amazonaws.com/dev","region":"us-east-1","paths":["/moves/auth/get-new-token","/moves/auth/gateway","/dynamo-db"]},{"id":"8itnjvhl3k","name":"Statistics","description":"Holds users statistics data","endpoint":"https://8itnjvhl3k.execute-api.us-east-1.amazonaws.com/Development","region":"us-east-1","paths":["/items","/path-6f0","/items/123","/path-6f0/123"]}]',
aws_cognito_identity_pool_id : 'us-east-1:bd9721cf-a06c-416f-bf28-ca2513b2cb77',
aws_cognito_region : 'us-east-1',
aws_content_delivery : 'enable',
aws_content_delivery_bucket : 'djinii-hosting-mobilehub-1897344653',
aws_content_delivery_bucket_region : 'us-east-1',
aws_content_delivery_cloudfront : 'enable',
aws_content_delivery_cloudfront_domain : 'dmmra8ksbfj29.cloudfront.net',
aws_dynamodb : 'enable',
aws_dynamodb_all_tables_region : 'us-east-1',
aws_dynamodb_table_schemas : '[{"tableName":"djinii-mobilehub-1897344653-Stats","attributes":[{"name":"userId","type":"S"},{"name":"time","type":"N"}],"indexes":[],"region":"us-east-1","hashKey":"userId"},{"tableName":"djinii-mobilehub-1897344653-Activities","attributes":[{"name":"userId","type":"S"},{"name":"startTime","type":"N"},{"name":"activity","type":"S"},{"name":"activityGroup","type":"M"},{"name":"endTime","type":"N"},{"name":"place","type":"M"},{"name":"trackPoints","type":"M"}],"indexes":[{"indexName":"startTime-activity","hashKey":"startTime","rangeKey":"activity"}],"region":"us-east-1","hashKey":"userId","rangeKey":"startTime"},{"tableName":"djinii-mobilehub-1897344653-Tokens","attributes":[{"name":"userId","type":"S"},{"name":"moves","type":"M"}],"indexes":[],"region":"us-east-1","hashKey":"userId"},{"tableName":"djinii-mobilehub-1897344653-Locations","attributes":[{"name":"userId","type":"S"},{"name":"time","type":"N"},{"name":"lat","type":"N"},{"name":"lon","type":"N"},{"name":"type","type":"S"}],"indexes":[{"indexName":"lat-lon","hashKey":"lat","rangeKey":"lon"},{"indexName":"time-type","hashKey":"time","rangeKey":"type"}],"region":"us-east-1","hashKey":"userId","rangeKey":"time"},{"tableName":"djinii-mobilehub-1897344653-Days","attributes":[{"name":"userId","type":"S"},{"name":"date","type":"N"},{"name":"activities","type":"L"},{"name":"lastUpdate","type":"N"},{"name":"locations","type":"L"},{"name":"stats","type":"L"}],"indexes":[],"region":"us-east-1","hashKey":"userId","rangeKey":"date"}]',
aws_facebook_app_id : '1774283112871368',
aws_facebook_app_permissions : 'public_profile',
aws_mobile_analytics_app_id : 'f73d81b75b8f467c8fa9ecd5f334fc25',
aws_project_id : '8f780637-d8ae-478e-a8fd-24ef901a4d74',
aws_project_name : 'Djinii',
aws_project_region : 'us-east-1',
aws_resource_name_prefix : 'djinii-mobilehub-1897344653',
aws_sign_in_enabled : 'enable',
aws_user_pools : 'enable',
aws_user_pools_id : 'us-east-1_ZrFqbUZBM',
aws_user_pools_mfa_type : 'OPTIONAL',
aws_user_pools_web_client_id : 'a2bni0c2g13ne9pou28queolv',
}

export default awsmobile;
var AWS = require('aws-sdk');
AWS.config.region = awsmobile.aws_project_region;
AWS.config.update({customUserAgent: 'MobileHub v0.1'});