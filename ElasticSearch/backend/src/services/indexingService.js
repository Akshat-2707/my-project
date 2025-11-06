import Product from "../models/Product.js";

import client from "../config/elasticsearch.js";


// ✅ Create index if not exists
export const createIndex = async () => {
  const indexName = "products";

  const exists = await client.indices.exists({ index: indexName });
  if (!exists) {
    await client.indices.create({
      index: indexName,
      body: {
        mappings: {
          properties: {
            name: { type: "text" },
            description: { type: "text" },
            price: { type: "float" },
            category: { type: "keyword" },
          },
        },
      },
    });
    console.log("✅ Elasticsearch index created");
  } else {
    console.log("ℹ️ Elasticsearch index already exists");
  }
};

// ✅ Insert sample products (this fixes your empty bulk request)
export const bulkIndexProducts = async () => {
  const products = [
    {
      name: "Wireless Mouse",
      description: "A smooth and responsive wireless mouse",
      price: 899,
      category: "electronics",
    },
    {
      name: "Gaming Keyboard",
      description: "Mechanical RGB keyboard for gaming",
      price: 2499,
      category: "electronics",
    },
    {
      name: "Noise Cancelling Headphones",
      description: "High-quality over-ear headphones with deep bass",
      price: 4999,
      category: "audio",
    },
    {
      name: "Running Shoes",
      description: "Comfortable and lightweight shoes for daily running",
      price: 2999,
      category: "fashion",
    },
  ];

  // ✅ Prevent empty body error
  if (!products || products.length === 0) {
    console.log("⚠️ No products to index.");
    return;
  }

  const body = products.flatMap((product) => [
    { index: { _index: "products" } },
    product,
  ]);

  try {
    const response = await client.bulk({ refresh: true, body });

    if (response.errors) {
      console.error("❌ Bulk indexing errors:", response);
    } else {
      console.log("✅ Sample products indexed successfully");
    }
  } catch (error) {
    console.error("❌ Error bulk indexing products:", error);
    throw error;
  }
};
