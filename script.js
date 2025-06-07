const resources = [
    // Recursos en bruto: Piedra
    "T4_ROCK", "T4_ROCK_LEVEL1@1", "T4_ROCK_LEVEL2@2", "T4_ROCK_LEVEL3@3", "T4_ROCK_LEVEL4@4",
    "T5_ROCK", "T5_ROCK_LEVEL1@1", "T5_ROCK_LEVEL2@2", "T5_ROCK_LEVEL3@3", "T5_ROCK_LEVEL4@4",
    "T6_ROCK", "T6_ROCK_LEVEL1@1", "T6_ROCK_LEVEL2@2", "T6_ROCK_LEVEL3@3", "T6_ROCK_LEVEL4@4",
    "T7_ROCK", "T7_ROCK_LEVEL1@1", "T7_ROCK_LEVEL2@2", "T7_ROCK_LEVEL3@3", "T7_ROCK_LEVEL4@4",
    "T8_ROCK", "T8_ROCK_LEVEL1@1", "T8_ROCK_LEVEL2@2", "T8_ROCK_LEVEL3@3", "T8_ROCK_LEVEL4@4",
    // Recursos en bruto: Cuero
    "T4_HIDE", "T4_HIDE_LEVEL1@1", "T4_HIDE_LEVEL2@2", "T4_HIDE_LEVEL3@3", "T4_HIDE_LEVEL4@4",
    "T5_HIDE", "T5_HIDE_LEVEL1@1", "T5_HIDE_LEVEL2@2", "T5_HIDE_LEVEL3@3", "T5_HIDE_LEVEL4@4",
    "T6_HIDE", "T6_HIDE_LEVEL1@1", "T6_HIDE_LEVEL2@2", "T6_HIDE_LEVEL3@3", "T6_HIDE_LEVEL4@4",
    "T7_HIDE", "T7_HIDE_LEVEL1@1", "T7_HIDE_LEVEL2@2", "T7_HIDE_LEVEL3@3", "T7_HIDE_LEVEL4@4",
    "T8_HIDE", "T8_HIDE_LEVEL1@1", "T8_HIDE_LEVEL2@2", "T8_HIDE_LEVEL3@3", "T8_HIDE_LEVEL4@4",
    // Recursos en bruto: Mineral
    "T4_ORE", "T4_ORE_LEVEL1@1", "T4_ORE_LEVEL2@2", "T4_ORE_LEVEL3@3", "T4_ORE_LEVEL4@4",
    "T5_ORE", "T5_ORE_LEVEL1@1", "T5_ORE_LEVEL2@2", "T5_ORE_LEVEL3@3", "T5_ORE_LEVEL4@4",
    "T6_ORE", "T6_ORE_LEVEL1@1", "T6_ORE_LEVEL2@2", "T6_ORE_LEVEL3@3", "T6_ORE_LEVEL4@4",
    "T7_ORE", "T7_ORE_LEVEL1@1", "T7_ORE_LEVEL2@2", "T7_ORE_LEVEL3@3", "T7_ORE_LEVEL4@4",
    "T8_ORE", "T8_ORE_LEVEL1@1", "T8_ORE_LEVEL2@2", "T8_ORE_LEVEL3@3", "T8_ORE_LEVEL4@4",
    // Recursos en bruto: Fibra
    "T4_FIBER", "T4_FIBER_LEVEL1@1", "T4_FIBER_LEVEL2@2", "T4_FIBER_LEVEL3@3", "T4_FIBER_LEVEL4@4",
    "T5_FIBER", "T5_FIBER_LEVEL1@1", "T5_FIBER_LEVEL2@2", "T5_FIBER_LEVEL3@3", "T5_FIBER_LEVEL4@4",
    "T6_FIBER", "T6_FIBER_LEVEL1@1", "T6_FIBER_LEVEL2@2", "T6_FIBER_LEVEL3@3", "T6_FIBER_LEVEL4@4",
    "T7_FIBER", "T7_FIBER_LEVEL1@1", "T7_FIBER_LEVEL2@2", "T7_FIBER_LEVEL3@3", "T7_FIBER_LEVEL4@4",
    "T8_FIBER", "T8_FIBER_LEVEL1@1", "T8_FIBER_LEVEL2@2", "T8_FIBER_LEVEL3@3", "T8_FIBER_LEVEL4@4",
    // Recursos en bruto: Madera
    "T4_WOOD", "T4_WOOD_LEVEL1@1", "T4_WOOD_LEVEL2@2", "T4_WOOD_LEVEL3@3", "T4_WOOD_LEVEL4@4",
    "T5_WOOD", "T5_WOOD_LEVEL1@1", "T5_WOOD_LEVEL2@2", "T5_WOOD_LEVEL3@3", "T5_WOOD_LEVEL4@4",
    "T6_WOOD", "T6_WOOD_LEVEL1@1", "T6_WOOD_LEVEL2@2", "T6_WOOD_LEVEL3@3", "T6_WOOD_LEVEL4@4",
    "T7_WOOD", "T7_WOOD_LEVEL1@1", "T7_WOOD_LEVEL2@2", "T7_WOOD_LEVEL3@3", "T7_WOOD_LEVEL4@4",
    "T8_WOOD", "T8_WOOD_LEVEL1@1", "T8_WOOD_LEVEL2@2", "T8_WOOD_LEVEL3@3", "T8_WOOD_LEVEL4@4",
    // Recursos procesados: Bloque de Piedra
    "T4_STONEBLOCK",
    "T5_STONEBLOCK", 
    "T6_STONEBLOCK",
    "T7_STONEBLOCK",
    "T8_STONEBLOCK",
    // Recursos procesados: Cuero Refinado
    "T4_LEATHER", "T4_LEATHER_LEVEL1@1", "T4_LEATHER_LEVEL2@2", "T4_LEATHER_LEVEL3@3", "T4_LEATHER_LEVEL4@4",
    "T5_LEATHER", "T5_LEATHER_LEVEL1@1", "T5_LEATHER_LEVEL2@2", "T5_LEATHER_LEVEL3@3", "T5_LEATHER_LEVEL4@4",
    "T6_LEATHER", "T6_LEATHER_LEVEL1@1", "T6_LEATHER_LEVEL2@2", "T6_LEATHER_LEVEL3@3", "T6_LEATHER_LEVEL4@4",
    "T7_LEATHER", "T7_LEATHER_LEVEL1@1", "T7_LEATHER_LEVEL2@2", "T7_LEATHER_LEVEL3@3", "T7_LEATHER_LEVEL4@4",
    "T8_LEATHER", "T8_LEATHER_LEVEL1@1", "T8_LEATHER_LEVEL2@2", "T8_LEATHER_LEVEL3@3", "T8_LEATHER_LEVEL4@4",
    // Recursos procesados: Lingote de Metal
    "T4_METALBAR", "T4_METALBAR_LEVEL1@1", "T4_METALBAR_LEVEL2@2", "T4_METALBAR_LEVEL3@3", "T4_METALBAR_LEVEL4@4",
    "T5_METALBAR", "T5_METALBAR_LEVEL1@1", "T5_METALBAR_LEVEL2@2", "T5_METALBAR_LEVEL3@3", "T5_METALBAR_LEVEL4@4",
    "T6_METALBAR", "T6_METALBAR_LEVEL1@1", "T6_METALBAR_LEVEL2@2", "T6_METALBAR_LEVEL3@3", "T6_METALBAR_LEVEL4@4",
    "T7_METALBAR", "T7_METALBAR_LEVEL1@1", "T7_METALBAR_LEVEL2@2", "T7_METALBAR_LEVEL3@3", "T7_METALBAR_LEVEL4@4",
    "T8_METALBAR", "T8_METALBAR_LEVEL1@1", "T8_METALBAR_LEVEL2@2", "T8_METALBAR_LEVEL3@3", "T8_METALBAR_LEVEL4@4",
    // Recursos procesados: Tela
    "T4_CLOTH", "T4_CLOTH_LEVEL1@1", "T4_CLOTH_LEVEL2@2", "T4_CLOTH_LEVEL3@3", "T4_CLOTH_LEVEL4@4",
    "T5_CLOTH", "T5_CLOTH_LEVEL1@1", "T5_CLOTH_LEVEL2@2", "T5_CLOTH_LEVEL3@3", "T5_CLOTH_LEVEL4@4",
    "T6_CLOTH", "T6_CLOTH_LEVEL1@1", "T6_CLOTH_LEVEL2@2", "T6_CLOTH_LEVEL3@3", "T6_CLOTH_LEVEL4@4",
    "T7_CLOTH", "T7_CLOTH_LEVEL1@1", "T7_CLOTH_LEVEL2@2", "T7_CLOTH_LEVEL3@3", "T7_CLOTH_LEVEL4@4",
    "T8_CLOTH", "T8_CLOTH_LEVEL1@1", "T8_CLOTH_LEVEL2@2", "T8_CLOTH_LEVEL3@3", "T8_CLOTH_LEVEL4@4",
    // Recursos procesados: Tablas de Madera
    "T4_PLANKS", "T4_PLANKS_LEVEL1@1", "T4_PLANKS_LEVEL2@2", "T4_PLANKS_LEVEL3@3", "T4_PLANKS_LEVEL4@4",
    "T5_PLANKS", "T5_PLANKS_LEVEL1@1", "T5_PLANKS_LEVEL2@2", "T5_PLANKS_LEVEL3@3", "T5_PLANKS_LEVEL4@4",
    "T6_PLANKS", "T6_PLANKS_LEVEL1@1", "T6_PLANKS_LEVEL2@2", "T6_PLANKS_LEVEL3@3", "T6_PLANKS_LEVEL4@4",
    "T7_PLANKS", "T7_PLANKS_LEVEL1@1", "T7_PLANKS_LEVEL2@2", "T7_PLANKS_LEVEL3@3", "T7_PLANKS_LEVEL4@4",
    "T8_PLANKS", "T8_PLANKS_LEVEL1@1", "T8_PLANKS_LEVEL2@2", "T8_PLANKS_LEVEL3@3", "T8_PLANKS_LEVEL4@4"
];
const locations = "Brecilien,Bridgewatch,Fort%20Sterling,Lymhurst,Martlock,Thetford,Caerleon";
const apiUrlBase = "https://www.albion-online-data.com/api/v2/stats/prices/";

async function fetchPrices() {
    const tbody = document.getElementById("priceBody");
    const errorDiv = document.getElementById("errorMessage");
    const tierFilter = document.getElementById("tierFilter").value;
    const resourceFilter = document.getElementById("resourceFilter").value;
    const cityFilter = document.getElementById("cityFilter").value;
    const enchantmentFilter = document.getElementById("enchantmentFilter").value;

    try {
        // Filtrar recursos según nivel, tipo de recurso y encantamiento
        const filteredResources = resources.filter(resource => {
            const tierMatch = !tierFilter || resource.startsWith(tierFilter);
            const resourceMatch = !resourceFilter || resource.includes(resourceFilter);
            const enchantmentMatch = !enchantmentFilter || resource.includes(`_LEVEL${enchantmentFilter}@${enchantmentFilter}`) || (enchantmentFilter === "0" && !resource.includes("_LEVEL"));
            return tierMatch && resourceMatch && enchantmentMatch;
        });

        if (filteredResources.length === 0) {
            errorDiv.textContent = "No se encontraron recursos para los filtros seleccionados.";
            tbody.innerHTML = "";
            return;
        }

        // Dividir recursos en bloques para evitar límite de URL (4096 caracteres)
        const chunkSize = 50;
        const resourceChunks = [];
        for (let i = 0; i < filteredResources.length; i += chunkSize) {
            resourceChunks.push(filteredResources.slice(i, i + chunkSize));
        }

        const allData = [];
        for (const chunk of resourceChunks) {
            const apiUrl = `${apiUrlBase}${chunk.join(',')}?locations=${locations}`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            const data = await response.json();
            allData.push(...data);
        }

        tbody.innerHTML = "";

        const resourceNames = {
            "ROCK": "Piedra",
            "HIDE": "Cuero",
            "ORE": "Mineral",
            "FIBER": "Fibra",
            "WOOD": "Madera",
            "STONEBLOCK": "Bloque de Piedra",
            "LEATHER": "Cuero Refinado",
            "METALBAR": "Lingote de Metal",
            "CLOTH": "Tela",
            "PLANKS": "Tablas de Madera"
        };

        // Agrupar datos y filtrar duplicados
        const groupedData = {};
        allData.forEach(item => {
            const tierMatch = item.item_id.match(/^T(\d+)/);
            const enchantMatch = item.item_id.match(/@(\d+)/);
            const enchantment = enchantMatch ? enchantMatch[1] : "0";

            // Extraer baseResource correctamente
            let baseResource = item.item_id.replace(/^T\d+_/, "");
            baseResource = baseResource.replace(/_LEVEL\d+@(\d+)/, "");
            baseResource = baseResource.replace(/_LEVEL\d+/, "");

            // Normalizar el nombre de la ciudad para comparación
            const city = item.city.replace(/%20/g, " ");

            // Filtrar por ciudad
            const cityMatch = !cityFilter || city === cityFilter;

            if (!cityMatch) return;

            // Depuración
            console.log(`Item ID: ${item.item_id}, Base Resource: ${baseResource}, Enchantment: ${enchantment}, City: ${city}, Sell Price Min: ${item.sell_price_min}`);

            const key = `${item.item_id}-${city}-${enchantment}`;

            // Solo guardar si hay datos válidos o es la primera entrada
            if (!groupedData[key] || (item.sell_price_min > 0 || item.sell_price_max > 0 || item.buy_price_min > 0 || item.buy_price_max > 0)) {
                groupedData[key] = {
                    item_id: item.item_id,
                    city: city,
                    tier: tierMatch ? tierMatch[1] : "?",
                    baseResource: baseResource,
                    enchantment: enchantment,
                    sell_price_min: item.sell_price_min,
                    sell_price_max: item.sell_price_max,
                    buy_price_min: item.buy_price_min,
                    buy_price_max: item.buy_price_max,
                    sell_price_min_date: item.sell_price_min_date
                };
            }
        });

        // Convertir los datos agrupados en filas de la tabla
        let hasEnchantmentData = false;
        Object.values(groupedData).forEach(item => {
            const resourceName = resourceNames[item.baseResource] || item.baseResource;
            if (item.enchantment !== "0" && (item.sell_price_min > 0 || item.sell_price_max > 0 || item.buy_price_min > 0 || item.buy_price_max > 0)) {
                hasEnchantmentData = true;
            }
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${resourceName}</td>
                <td>T${item.tier}</td>
                <td>${item.enchantment}</td>
                <td>${item.city}</td>
                <td>${item.sell_price_min || 'N/A'}</td>
                <td>${item.sell_price_max || 'N/A'}</td>
                <td>${item.buy_price_min || 'N/A'}</td>
                <td>${item.buy_price_max || 'N/A'}</td>
                <td>${item.sell_price_min_date || 'N/A'}</td>
            `;
            tbody.appendChild(row);
        });

        if (Object.keys(groupedData).length === 0) {
            errorDiv.textContent = "No se encontraron datos para los filtros seleccionados.";
        } else if (!hasEnchantmentData) {
            errorDiv.textContent = "";
        } else {
            errorDiv.textContent = "";
        }
    } catch (error) {
        errorDiv.textContent = `Error al cargar los precios: ${error.message}`;
        console.error(error);
    }
}

// Ejecutar la función al cargar la página
fetchPrices();