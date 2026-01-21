SRCDIR = docs
PYTHON = python3
PORT ?= 8080

run:
	@echo Running on http://localhost:$(PORT)
	@cd $(SRCDIR) && $(PYTHON) -m http.server $(PORT)