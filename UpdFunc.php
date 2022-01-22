<?php

use HubSpot\Client\Cms\Hubdb\Model\HubDbTableRowV3Request;
use HubSpot\Factory;
require "vendor/autoload.php";

$client = Factory::createWithApiKey("4c6dcb6d-d46b-48d8-a26b-5677fc77c29c");

$values = [
    "name" => $_GET["name"],
    "last_name" => $_GET["last_name"],
    "document_id" => $_GET["doc_id"]
];

$HubDbTableRowV3Request = new HubDbTableRowV3Request(['values' => $values]);
try {
    $apiResponse = $client->cms()->hubdb()->rowsApi()->updateDraftTableRow("developer_test_4", $_GET["row_id"], $HubDbTableRowV3Request);
    echo json_encode($apiResponse);
} catch (Exception $e) {
    echo json_encode("Exception when calling rows_api->update_draft_table_row: ", $e->getMessage());
}

