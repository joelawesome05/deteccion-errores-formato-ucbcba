package com.ucbcba.joel.deteccionerroresformatoucbcba;

import com.ucbcba.joel.deteccionerroresformatoucbcba.property.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
		FileStorageProperties.class
})
public class DeteccionErroresFormatoUcbcbaApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeteccionErroresFormatoUcbcbaApplication.class, args);
	}
}
