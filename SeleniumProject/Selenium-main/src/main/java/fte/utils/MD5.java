package fte.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class MD5 {

    public static String calculateMD5(String filePath) {
        try
                (FileInputStream fis = new FileInputStream(filePath)) {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] data = new byte[1024];
            int len;
            while ((len = fis.read(data)) != -1) {
                md.update(data, 0, len);
            }
            byte[] hashBytes = md.digest();
            return Base64.getEncoder().encodeToString(hashBytes);
        } catch
        (NoSuchAlgorithmException | IOException e) {
            e.printStackTrace();
            System.out.println("Error: " + e.getMessage());
        }
        return null;
    }
}
