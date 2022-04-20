package com.cnn.dataaccesspersistance;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class Controller {

    @GetMapping
    public String getTest() {
        return "Data access and persistance layer";
    }
}
