package com.group1j.backend.services;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

public class CeaserCipher implements PasswordEncoder{
    //Fields
    private static final int ckey = 8;

    /**
     * Method to encode password
     * @param password
     * @param key
     * @param iv
     * @return
     * @throws NoSuchPaddingException
     * @throws NoSuchAlgorithmException
     * @throws InvalidAlgorithmParameterException
     * @throws InvalidKeyException
     * @throws BadPaddingException
     * @throws IllegalBlockSizeException
     */
    @Override
    public String encode(String password, SecretKey key, IvParameterSpec iv) throws NoSuchPaddingException, NoSuchAlgorithmException,
            InvalidAlgorithmParameterException, InvalidKeyException,
            BadPaddingException, IllegalBlockSizeException {
        String encrypted = "";
        char ch;
        for(int i = 0; i < password.length(); ++i){
            ch = password.charAt(i);
            if(ch >= 'a' && ch <= 'z'){
                ch = (char)(ch + ckey);

                if(ch > 'z'){
                    ch = (char)(ch - 'z' + 'a' - 1);
                }

                encrypted += ch;
            }
            else if(ch >= 'A' && ch <= 'Z'){
                ch = (char)(ch + ckey);

                if(ch > 'Z'){
                    ch = (char)(ch - 'Z' + 'A' - 1);
                }

                encrypted += ch;
            }
            else {
                encrypted += ch;
            }
        }

        return encrypted;
    }

    /**
     * Method to decode password
     * @param password
     * @param key
     * @param iv
     * @return
     * @throws NoSuchPaddingException
     * @throws NoSuchAlgorithmException
     * @throws InvalidAlgorithmParameterException
     * @throws InvalidKeyException
     * @throws BadPaddingException
     * @throws IllegalBlockSizeException
     */
    @Override
    public String decode(String password,SecretKey key,IvParameterSpec iv) throws NoSuchPaddingException, NoSuchAlgorithmException,
            InvalidAlgorithmParameterException, InvalidKeyException,
            BadPaddingException, IllegalBlockSizeException{
        String decrypted = "";
        char ch;
        for(int i = 0; i < password.length(); ++i){
            ch = password.charAt(i);
            if(ch >= 'a' && ch <= 'z'){
                ch = (char)(ch - ckey);

                if(ch < 'a'){
                    ch = (char)(ch + 'z' - 'a' + 1);
                }

                decrypted += ch;
            }
            else if(ch >= 'A' && ch <= 'Z'){
                ch = (char)(ch - ckey);

                if(ch < 'A'){
                    ch = (char)(ch + 'Z' - 'A' + 1);
                }

                decrypted += ch;
            }
            else {
                decrypted += ch;
            }
        }
        return decrypted;
    }
}
