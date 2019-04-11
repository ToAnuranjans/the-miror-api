const {
  Aborter,
  BlobURL,
  BlockBlobURL,
  ContainerURL,
  ServiceURL,
  SharedKeyCredential,
  StorageURL,
  uploadStreamToBlockBlob
} = require("@azure/storage-blob");
const fs = require("fs");
const path = require("path");

const AZURE_STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const AZURE_STORAGE_ACCOUNT_ACCESS_KEY =
  process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY;

const ONE_MEGABYTE = 1024 * 1024;
const FOUR_MEGABYTES = ONE_MEGABYTE * 4;

const ONE_MINUTE = 60 * 1000;

const CONTAINER_NAME = "PRODUCT_IMAGE_CONTAINER";
const BLOB_NAME = "BLOB_NAME";

const credentials = new SharedKeyCredential(
  AZURE_STORAGE_ACCOUNT_NAME,
  AZURE_STORAGE_ACCOUNT_ACCESS_KEY
);

const pipeline = StorageURL.newPipeline(credentials);

const serviceUrl = new ServiceURL(
  `https://${AZURE_STORAGE_ACCOUNT_ACCESS_KEY}.blob.core.windows.net/`,
  pipeline
);

const containerUrl = ContainerURL.fromServiceURL(serviceUrl, CONTAINER_NAME);
const blobUrl = BlockBlobURL.fromContainerURL(containerUrl, BLOB_NAME);
const aborter = Aborter.timeout(30 * ONE_MINUTE);

async function execute() {
  await containerUrl.create(aborter);
  console.log(`Container: "${containerName}" is created`);
}


