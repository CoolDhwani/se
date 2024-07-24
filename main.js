
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format :'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
   
    Webcam.snap(function(data_uri) {
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
    
    })
  ;
}

Webcam.attach(camera);

console.log('ml5 version:', ml5.version);

function preload(){
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qLGUD8Drm/model.json',modelLoaded);}

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qLGUD8Drm/model.json',modelLoaded);
    img = document.getElementById('selfie1');
    classifier.classify(img, gotResult);
  }

function gotResult(error, results) {

    console.log(results);
    
    document.getElementById("name").innerHTML = results[0].label;

    gesture = results[0].label;
    
    if(gesture == "tulsi")
      {
        document.getElementById("information").innerHTML = "To grow Tulsi (also known as Holy Basil), choose well-draining soil with a pH between 6.0 and 7.5. Provide at least 4 hours of sunlight daily, and water when the top inch of soil is dry. Tulsi prefers warm temperatures (21-32°C or 70-90°F) and is suitable for tropical and subtropical regions. Enjoy cultivating this fragrant herb";}
      else if(gesture == "moneyplant")
        {
          document.getElementById("information").innerHTML = "Certainly! To grow a money tree (also known as Pachira aquatica), place it in bright to medium indirect sunlight for at least 6 hours daily. Use well-draining soil with a pH between 6.0 and 7.5. Keep the soil evenly moist, allowing the top inch to dry out before watering again. Maintain temperatures between 65°F and 75°F (18°C to 24°C) and increase humidity if needed. Feed monthly during active growth and trim as desired";
        }
      else if(gesture == "croton")
        {
          document.getElementById("information").innerHTML = " Growing cotton involves several steps: (1) Choose a warm climate with a long growing season. (2) Start seeds indoors or directly in the ground based on your zone. (3) Transplant seedlings outdoors and space them properly. (4) Provide regular watering, mulch, and pest control. For croton houseplants, ensure bright light, maintain humidity, and use well-draining soil. Remember that crotons are toxic to humans and pets.";
        }
      else if(gesture == "spider plant")
        {
          document.getElementById("information").innerHTML = "Spider plants (Chlorophytum comosum) thrive in bright, indirect light and require watering when 50-75% of the soil volume is dry. Maintain humidity by misting the leaves, and keep temperatures between 60–80°F (15–27°C). Feed them monthly with an all-purpose indoor plant fertilizer. Propagate spiderettes by trimming and rooting them in water before planting in soil. These non-toxic plants are both graceful and air-purifying! ";
        }
      else if(gesture == "sadabahar")
        {
          document.getElementById("information").innerHTML = "Sada Bahar, also known as Periwinkle (Catharanthus roseus), is a beautiful flowering plant that blooms for an extended period. To grow it from seeds, follow these steps: (1) Soak the seeds in warm water for 24 hours to aid germination. (2) Use well-draining potting mix and plant the seeds in a tray or small pots. (3) Keep the soil consistently moist but not waterlogged. (4) Once seedlings have true leaves, transplant them into larger pots or a garden bed. Sada Bahar thrives in shade, prefers loamy soil, and blooms well in warm temperatures";
        }
      else if(gesture == "hibiscus")
        {
          document.getElementById("information").innerHTML = " To grow hibiscus, consider the following: (1) Sunlight: In northern areas, plant hibiscus in full sun; in the south, filtered sunlight is better. (2) Soil: Opt for fertile, loamy soil with good drainage. (3) Watering: Keep the soil consistently moist, watering as needed. (4) Varieties: Choose varieties suited to your local temperatures. Hardy hibiscus can thrive outdoors, while tropical ones can be grown in pots and overwintered indoors. (5) Fertilize: Regularly fertilize during the growing season. (6) Prune: Prune in spring for optimal growth. Enjoy the vibrant blooms! ";
        }
      else if(gesture == "neem")
        {
          document.getElementById("information").innerHTML = " Neem (Azadirachta indica) is a hardy tree that tolerates temperatures up to 120°F (50°C). To grow it, locate fresh neem seeds and plant them directly in well-drained soil outdoors or start them indoors in pots. Regular moisture is essential, but avoid overwatering. Neem trees benefit from bright sunlight. As they grow about 8 feet annually, repot them until fully established. If you have access to mature trees, root cuttings in late fall or early winter ";
        }
      else if(gesture == "rose")
        {
          document.getElementById("information").innerHTML = " To grow healthy roses, follow these steps: Plant them in a sunny location with well-drained soil rich in organic matter. Roses prefer slightly acidic soil (pH 6-7). Shrub roses are versatile and can thrive across different regions, especially where other rose species may not be hardy1. Regular pruning and maintenance are essential for their care.";
        }
      else if(gesture == "bouginvillea")
        {
          document.getElementById("information").innerHTML = " Bougainvillea (Bougainvillea) is a fast-growing woody vine known for its colorful foliage and small, pale flowers. To care for it: (1) Sunlight: Plant in full sun. (2) Soil: Use well-draining, loamy soil. (3) Water: Regularly water without allowing standing water. (4) Pruning: Trim old growth for year-round blooms. Be cautious of its sharp thorns!";
        }
      else if(gesture == "lychee")
        {
          document.getElementById("information").innerHTML = " Certainly! To grow a litchi tree from seed, follow these steps: Obtain fresh litchi seeds, soak them for 3 days until the husk cracks, plant them in slightly acidic soil, and care for them in a sunny spot with regular watering. ";
        }
      else if(gesture == "aloe vera")
        { 
         document.getElementById("information").innerHTML = "  Aloe vera, thrives in bright, indirect sunlight near a sunny window, prefers well-draining soil, requires sparing watering (allow soil to dry out between waterings), and can be propagated from offsets. It’s a versatile houseplant with healing properties, suitable for both indoor and outdoor cultivation  ";
        } 
      else if(gesture == "guava")
        { 
         document.getElementById("information").innerHTML = " Growing guava is easy if you provide enough sunlight, water, and fertilizer. Guavas are tropical fruits that need a warm climate to thrive. They usually bear fruit after the first year of growth, with the best results occurring when grown in slightly acidic soil  ";
        } 
      else if(gesture == "bamboo")
        { 
         document.getElementById("information").innerHTML = "  To grow bamboo successfully, choose the right variety (clumping or running), select a sunny spot, amend the soil with compost and manure, and protect the shallow-rooted plant from strong winds. Bamboo adds a special touch to your yard when grown with care!  ";  
        }
      else if(gesture == "wheat")
        { 
          document.getElementById("information").innerHTML = "  To grow wheat add reqired fertilisers to soil, choose a sunny spot with well-drained, loamy soil. Plant seeds about 25 per square foot, 1 inch deep for spring wheat or 2 inches deep for winter wheat. Keep the soil consistently moist, remove weeds, and work in well-rotted manure. Harvest when mature and dry  ";  
        }
      else if(gesture == "rice")
        { 
          document.getElementById("information").innerHTML = "  Rice : Select a flat area with ample water resources.Prepare the land, choose quality seeds, and plant.Keep the soil moist during rice growth.Harvest once grains develop.Remember to consider your climate and sunlight availability for successful crop growth!   ";         
        }      
      else if(gesture == "maize")
        { 
          document.getElementById("information").innerHTML = "  Maize (Corn):Choose a south-facing site with well-drained, medium loam soil.Create a deep, loose seed-bed.Drill maize seeds uniformly into moist soil.Sow seeds at least 7-8 cm deep.   ";       
        } 
      else if(gesture == "gram")
        { 
          document.getElementById("information").innerHTML = " Gram (Chickpeas):Opt for sandy loam to clay loam soil with good drainage.Scatter seeds or plant in rows, spacing rows 10-12 inches apart.Maintain soil moisture and monitor plant growth.Harvest when pods are mature and dry.   ";             
        } 
      else if(gesture == "pea")
        { 
          document.getElementById("information").innerHTML = " To grow peas successfully, follow these steps:Soil Preparation:Choose rich, loamy soil that drains well.Sandy soil encourages earlier production, while heavier clay soil is suitable for later crops.Peas prefer a soil pH of 5.5 to 6.8. Do a soil test before planting.PlantingDirect sow pea seeds in the garden.Make a trench about an inch deep.Drop pea seeds 2 inches apart, cover, firm the soil, and water well. No need to thin them later.For a fall crop, plant peas about two months before your first frost in fall.Support:Grow peas supported by poles, a trellis, or a fence.  ";                      
        }
      else if(gesture == "mustard")
        { 
          document.getElementById("information").innerHTML = " Soil Preparation:Choose well-drained soil rich in organic matter.Mustard prefers a soil pH of 5.5 to 6.8.Planting:Grow mustard in full sun or partial shade.Sow seeds directly in the ground after soils reach 40°F.Plant seeds about ½ inch deep.Thin stands when plants have 3-4 true leaves.Harvesting:Harvest mustard greens when they reach desired size.Remember, mustard is adaptable and easy to grow!  ";                             
        }
      else if(gesture == "tea")
        { 
          document.getElementById("information").innerHTML = " Growing tea at home can be a rewarding experience. Here’s a concise guide to get you started:Tea Plant Varieties:Tea comes from the plant Camellia sinensis.Two main varieties:Camellia sinensis sinensis (from China, prefers cooler temps).Camellia sinensis var. assamica (from India, thrives in warmer areas).Planting:Zones 6-9 are suitable for tea growth.Plant in a bright, sheltered location with partial shade.Use well-draining, slightly acidic soil (pH 4.5-6.5).Consider growing in pots for better control.Starting from Seeds:Soak tea seeds for 24-48 hours.Germination can take up to 8 weeks.Care for your tea plants by watering, fertilizing, and pruning. ";                             
        }
      else if(gesture == "apple")
        { 
          document.getElementById("information").innerHTML = " Growing apple trees successfully involves a few key steps:Variety Selection:Choose the right apple variety for your site and climate.Opt for loamy soil with good drainage.Sunlight and Watering:Provide 6+ hours of daily sunlight.Water when the top 2-4 inches of soil are dry.Fertilize and Mulch:Use fertilizer or compost.Apply 4 inches of mulch every 3-6 months.Pruning:Prune in late winter to shape the tree.";                             
        }
      else if(gesture == "mango")
        { 
          document.getElementById("information").innerHTML = " To grow mango trees successfully, follow these steps:Variety Selection:Choose a robust young tree or mango seed.Plant it in nutrient-rich, well-draining soil under direct sunlight.Watering and Fertilization:Water consistently but avoid overwatering.As the tree matures, provide regular fertilization.Protection and Pruning:Protect from pests and frost.Prune occasionally to maintain shape.Remember, patience pays off—the tree may take up to three years to bear fruit! ";
        }
      else if(gesture == "banana")
        { 
          document.getElementById("information").innerHTML = " Growing banana trees can be rewarding, whether indoors or outdoors. Here’s a concise guide to get you started: Light:Most banana plants prefer full sun (at least 6 hours of direct sunlight daily).Some varieties tolerate partial shade better.Soil:Use deep, organically rich soil with good drainage.Aim for a slightly acidic pH (between 5.0 and 6.5).Water:Banana trees are tropical and need plenty of water.Keep the soil evenly moist but not soggy.Grouping them helps retain moisture in leaves.Remember, space, compost, and regular watering are key to successful banana tree growth ";                                 
        }
      else if(gesture == "coffee")
        { 
          document.getElementById("information").innerHTML = " To grow coffee at home, follow these steps:Starting from Seed:Use ripe coffee cherries if available.Crush the cherry, rinse the inner beans, and allow them to ferment.Dry the beans until almost completely dry.Alternatively, purchase green coffee beans and pre-soak them.Sow seeds in well-draining soil, keeping it moist.Transfer germinated seed to a deeper pot.Basic Care:Coffee plants need a warm spot with bright, indirect light.Ideal temperature: 16-24°C.Water regularly, keeping the compost moist but not waterlogged.Feed every two weeks during the growing season.Enjoy your homegrown coffee journey!";                                 
        }
  }