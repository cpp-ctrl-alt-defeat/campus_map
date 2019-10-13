import java.io.*;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class BuildingScraper {

    public static void main(String args[])throws Exception{
        File file = new File("C:\\Users\\Carmelo\\Downloads\\campus_map-master\\campus_map-master\\svg.js");
        ArrayList<String> buildings = new ArrayList<>();
        String output = "var buildings = [";

        BufferedReader br = new BufferedReader(new FileReader(file));

        String st;
        while ((st = br.readLine()) != null) {
            //System.out.println(st);
            if (st.matches("var B(.*)")) {
                //System.out.println(st);
                Pattern pattern = Pattern.compile("B[0-9a-z]+.");
                Matcher matcher = pattern.matcher(st);
                matcher.find();
                buildings.add(matcher.group(0));
            }
        }
        for (String b:buildings
             ) {
            //System.out.println(b);
            output += b + ",";
        }
        output += "];";
        output = output.replace(" ,]", "]");
        System.out.println(output);

    }
}
