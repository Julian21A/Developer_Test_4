<?php
use HubSpot\Factory;
require "vendor/autoload.php";

$client = Factory::createWithApiKey("4c6dcb6d-d46b-48d8-a26b-5677fc77c29c");

try {
    $apiResponse = $client->cms()->hubdb()->rowsApi()->getDraftTableRowById("developer_test_4", $_GET["row_id"]);
    return json_encode($apiResponse);;
} catch (Exception $e) {
    return json_encode("Exception when calling rows_api->get_draft_table_row_by_id: ", $e->getMessage());
}

