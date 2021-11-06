var wms_layers = [];

var format_Border_0 = new ol.format.GeoJSON();
var features_Border_0 = format_Border_0.readFeatures(json_Border_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Border_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Border_0.addFeatures(features_Border_0);
var lyr_Border_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Border_0, 
                style: style_Border_0,
                interactive: false,
                title: '<img src="styles/legend/Border_0.png" /> Border'
            });
var format_Street_1 = new ol.format.GeoJSON();
var features_Street_1 = format_Street_1.readFeatures(json_Street_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Street_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Street_1.addFeatures(features_Street_1);
var lyr_Street_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Street_1, 
                style: style_Street_1,
                interactive: false,
                title: '<img src="styles/legend/Street_1.png" /> Street'
            });
var format_Health_2 = new ol.format.GeoJSON();
var features_Health_2 = format_Health_2.readFeatures(json_Health_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Health_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Health_2.addFeatures(features_Health_2);
var lyr_Health_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Health_2, 
                style: style_Health_2,
                interactive: false,
                title: '<img src="styles/legend/Health_2.png" /> Health'
            });
var format_Schools_3 = new ol.format.GeoJSON();
var features_Schools_3 = format_Schools_3.readFeatures(json_Schools_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_3.addFeatures(features_Schools_3);
var lyr_Schools_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Schools_3, 
                style: style_Schools_3,
                interactive: true,
                title: '<img src="styles/legend/Schools_3.png" /> Schools'
            });

lyr_Border_0.setVisible(true);lyr_Street_1.setVisible(true);lyr_Health_2.setVisible(true);lyr_Schools_3.setVisible(true);
var layersList = [lyr_Border_0,lyr_Street_1,lyr_Health_2,lyr_Schools_3];
lyr_Border_0.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'Ref_G': 'Ref_G', 'Shape_Leng': 'Shape_Leng', 'Area_km2': 'Area_km2', 'Population': 'Population', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'Part_Engli': 'Part_Engli', 'Part_Arabi': 'Part_Arabi', 'Governorat': 'Governorat', 'Governor_1': 'Governor_1', 'Governor_2': 'Governor_2', 'Governor_3': 'Governor_3', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Ar_2': 'Shape_Ar_2', 'dead': 'dead', 'RuleID': 'RuleID', 'RuleID_1': 'RuleID_1', 'Shape_Le_3': 'Shape_Le_3', 'OID_': 'OID_', 'OBJECTID_3': 'OBJECTID_3', 'Name_Engli': 'Name_Engli', 'Name_Arabi': 'Name_Arabi', 'Governor_4': 'Governor_4', 'Governor_5': 'Governor_5', 'Ref_L': 'Ref_L', 'Area_Built': 'Area_Built', 'Shape_Le_4': 'Shape_Le_4', 'Shape_Ar_3': 'Shape_Ar_3', 'Shape_Le_5': 'Shape_Le_5', 'Shape_Area': 'Shape_Area', });
lyr_Street_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'Shape_Leng': 'Shape_Leng', });
lyr_Health_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'MOH_Code': 'MOH_Code', 'Facility_O': 'Facility_O', 'Name3': 'Name3', 'Name1': 'Name1', 'Type_': 'Type_', 'OwnerName': 'OwnerName', 'X': 'X', 'Y': 'Y', 'GOVEID': 'GOVEID', 'Gov_NAME1': 'Gov_NAME1', });
lyr_Schools_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LayerName_': 'LayerName_', 'LayerName1': 'LayerName1', 'FacilityNa': 'FacilityNa', 'Facility_1': 'Facility_1', 'FacilityDe': 'FacilityDe', 'Category_A': 'Category_A', 'Category_E': 'Category_E', 'Governorat': 'Governorat', 'Governor_1': 'Governor_1', 'type': 'type', });
lyr_Border_0.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'Ref_G': 'Range', 'Shape_Leng': 'TextEdit', 'Area_km2': 'TextEdit', 'Population': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'Part_Engli': 'TextEdit', 'Part_Arabi': 'TextEdit', 'Governorat': 'TextEdit', 'Governor_1': 'TextEdit', 'Governor_2': 'TextEdit', 'Governor_3': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Ar_2': 'TextEdit', 'dead': 'TextEdit', 'RuleID': 'TextEdit', 'RuleID_1': 'TextEdit', 'Shape_Le_3': 'TextEdit', 'OID_': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'Name_Engli': 'TextEdit', 'Name_Arabi': 'TextEdit', 'Governor_4': 'TextEdit', 'Governor_5': 'TextEdit', 'Ref_L': 'TextEdit', 'Area_Built': 'TextEdit', 'Shape_Le_4': 'TextEdit', 'Shape_Ar_3': 'TextEdit', 'Shape_Le_5': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Street_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Health_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'MOH_Code': 'TextEdit', 'Facility_O': 'TextEdit', 'Name3': 'TextEdit', 'Name1': 'TextEdit', 'Type_': 'TextEdit', 'OwnerName': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'GOVEID': 'TextEdit', 'Gov_NAME1': 'TextEdit', });
lyr_Schools_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'LayerName_': 'TextEdit', 'LayerName1': 'TextEdit', 'FacilityNa': 'TextEdit', 'Facility_1': 'TextEdit', 'FacilityDe': 'TextEdit', 'Category_A': 'TextEdit', 'Category_E': 'TextEdit', 'Governorat': 'TextEdit', 'Governor_1': 'TextEdit', 'type': 'TextEdit', });
lyr_Border_0.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'Ref_G': 'no label', 'Shape_Leng': 'no label', 'Area_km2': 'no label', 'Population': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', 'Part_Engli': 'no label', 'Part_Arabi': 'no label', 'Governorat': 'no label', 'Governor_1': 'no label', 'Governor_2': 'no label', 'Governor_3': 'no label', 'Shape_Le_2': 'no label', 'Shape_Ar_2': 'no label', 'dead': 'no label', 'RuleID': 'no label', 'RuleID_1': 'no label', 'Shape_Le_3': 'no label', 'OID_': 'no label', 'OBJECTID_3': 'no label', 'Name_Engli': 'no label', 'Name_Arabi': 'no label', 'Governor_4': 'no label', 'Governor_5': 'no label', 'Ref_L': 'no label', 'Area_Built': 'no label', 'Shape_Le_4': 'no label', 'Shape_Ar_3': 'no label', 'Shape_Le_5': 'no label', 'Shape_Area': 'no label', });
lyr_Street_1.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'Shape_Leng': 'no label', });
lyr_Health_2.set('fieldLabels', {'OBJECTID': 'no label', 'MOH_Code': 'no label', 'Facility_O': 'no label', 'Name3': 'no label', 'Name1': 'header label', 'Type_': 'inline label', 'OwnerName': 'no label', 'X': 'no label', 'Y': 'no label', 'GOVEID': 'no label', 'Gov_NAME1': 'no label', });
lyr_Schools_3.set('fieldLabels', {'OBJECTID': 'no label', 'LayerName_': 'no label', 'LayerName1': 'no label', 'FacilityNa': 'inline label', 'Facility_1': 'no label', 'FacilityDe': 'no label', 'Category_A': 'no label', 'Category_E': 'no label', 'Governorat': 'inline label', 'Governor_1': 'no label', 'type': 'no label', });
lyr_Schools_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});