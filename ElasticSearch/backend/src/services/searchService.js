import esClient from "../config/elasticsearch.js";

const INDEX_NAME = "products";

export const searchProducts = async (query, filters, page = 1, size = 10) => {
  const body = {
    from: (page - 1) * size,
    size,
    query: {
      bool: {
        must: [
          {
            multi_match: {
              query,
              fields: ["name^3", "description", "brand", "category"],
              fuzziness: "AUTO",
            },
          },
        ],
        filter: [],
      },
    },
    aggs: {
      brands: { terms: { field: "brand" } },
      categories: { terms: { field: "category" } },
      prices: { histogram: { field: "price", interval: 50 } },
    },
  };

  const { hits, aggregations } = await esClient.search({
    index: INDEX_NAME,
    body,
  });

  return {
    results: hits.hits.map((hit) => hit._source),
    facets: aggregations,
  };
};
