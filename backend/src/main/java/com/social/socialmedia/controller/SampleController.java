package com.social.socialmedia.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {

	@GetMapping(value = "/v1/healthCheck")
	public String greet() {
		return "Hello";
	}
}
