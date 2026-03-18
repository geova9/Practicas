<?php
$xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
$xml .= "<discografia>\n";

if (isset($_REQUEST['artista'])) {
    switch ($_REQUEST['artista']) {

        case "1":
            $xml .= "<foto>mora.jpg</foto>\n";
            $xml .= "<album nombre='Microdosis' anyo='2022'>\n";
            $xml .= "<cancion titulo='LA INOCENTE' duracion='3:22' />\n";
            $xml .= "<cancion titulo='badtrip' duracion='3:11' />\n";
            $xml .= "</album>\n";
            break;

        case "2":
            $xml .= "<foto>losinquietos.jpg</foto>\n";
            $xml .= "<album nombre='LOS MEJORES 30 VOL.2' anyo='2008'>\n";
            $xml .= "<cancion titulo='VOLVER' duracion='4:54' />\n";
            $xml .= "<cancion titulo='Regalame una noche' duracion='5:08' />\n";
            $xml .= "</album>\n";
            break;

        case "3":
            $xml .= "<foto>beele.jpg</foto>\n";
            $xml .= "<album nombre='OVY ON THE DRUMS' anyo='2025'>\n";
            $xml .= "<cancion titulo='YO Y TU' duracion='3:18' />\n";
            $xml .= "<cancion titulo='Inolvidable' duracion='3:46' />\n";
            $xml .= "</album>\n";
            break;

        default:
            $xml .= "<error>Artista no encontrado</error>\n";
    }
}

$xml .= "</discografia>";

header("Content-Type: text/xml");
echo $xml;
?>
