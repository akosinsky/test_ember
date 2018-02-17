FROM mono:latest as backend

ARG TAG
RUN 	echo TAG=$TAG ; \
	mono --version ; \
    	apt update ; \
	apt install -y git tree ; \
	git clone --depth=50 --branch=develop https://github.com/Flexberry/NewPlatform.Flexberry.ServiceBus.Editor.git /Flexberry/NewPlatform.Flexberry.ServiceBus.Editor ; \
	msbuild /version ; \
	cd /Flexberry/NewPlatform.Flexberry.ServiceBus.Editor ; \
	nuget restore NewPlatform.Flexberry.ServiceBus.Editor.sln ; \
	msbuild /p:Configuration=Release NewPlatform.Flexberry.ServiceBus.Editor.sln ; \
	pwd ; \
	tree

