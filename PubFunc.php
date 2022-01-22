<?php

use HubSpot\Factory;
require "vendor/autoload.php";

$client = Factory::createWithApiKey("4c6dcb6d-d46b-48d8-a26b-5677fc77c29c");

try {
    $apiResponse = $client->cms()->hubdb()->tablesApi()->publishDraftTable("developer_test_4", null);
    return json_encode($apiResponse);
} catch (Exception $e) {
    return json_encode("Exception when calling tables_api->publish_draft_table: ", $e->getMessage());
}

