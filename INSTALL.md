# Install MMM-GoogleDocs-Notes

This guide will walk you through the installation process of MMM-GoogleDocs-Notes.

We will

1.  Create a Google Cloud Project and configure OAuth to access your Google Drive

2.  Authorize MMM-GoogleDocs-Notes via cli

3.  Setup the Google Docs Page

4.  Check the result


Prerequisite:

1.  Downloaded the MMM-GoogleDocs-Notes module from GitHub to your Magic Mirror modules directory

2.  nodejs installed

3.  you can open a cli (cmd, bash, shell or whatever you are running)

4.  you have a google account

__Creation Date:__ September 9, 2023



***




## # [Open Google Cloud Console](https://console.cloud.google.com/welcome)


### 1. Click on NEW PROJECT
![Step 1 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/619416c5-8584-4798-92cf-4251ca8ac24e/04c406c5-d22b-4eb4-a013-7fce7ea647f1.png?crop=focalpoint&fit=crop&fp-x=0.6400&fp-y=0.2884&fp-z=2.8104&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=506&mark-y=325&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xODgmaD02MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 2. Click on Project name
![Step 2 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/5476580f-a2b5-4194-bbbb-a712f5485b43/46b62508-5957-40fb-9b8b-73e1c87c6872.png?crop=focalpoint&fit=crop&fp-x=0.1236&fp-y=0.2049&fp-z=1.9266&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=33&mark-y=267&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MDYmaD0zMCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 3. Click on CREATE
![Step 3 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/aab93eb0-51d9-42e2-b7d6-13ea986a84f2/bde21d7d-2467-4e2d-840c-800ec15c6692.png?crop=focalpoint&fit=crop&fp-x=0.0279&fp-y=0.3262&fp-z=2.9669&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=33&mark-y=324&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMzImaD02NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 4. Click on SELECT PROJECT
![Step 4 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/a2e9178b-e17b-4a4d-8dd2-3fe6791e66a4/b5c78813-1a39-4048-b0d7-04da8e925b81.png?crop=focalpoint&fit=crop&fp-x=0.7901&fp-y=0.1158&fp-z=3.0164&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=484&mark-y=216&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yMzMmaD02OCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 5. Click on APIs & Services
![Step 5 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/ef32e7dd-1751-4fb1-89f8-8a26c9b9d767/8ad4f671-1740-4f75-909e-005e4b03796c.png?crop=focalpoint&fit=crop&fp-x=0.3058&fp-y=0.4366&fp-z=2.3595&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=425&mark-y=295&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNTEmaD0xMjUmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 6. Click on  ENABLE APIS AND SERVICES
![Step 6 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/4c3eae60-81f8-4a96-a005-9e708e46d4bf/c9fc07b0-a7dc-44c8-98ee-eaa3b2ff0c5e.png?crop=focalpoint&fit=crop&fp-x=0.2648&fp-y=0.0567&fp-z=2.4489&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=441&mark-y=69&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMTgmaD02MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 7. Click on Google Drive API…
![Step 7 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/3ba86ca1-4f81-4953-8c58-0affa02551a6/0f14da8d-8e76-4920-a248-66b6c7b3f36b.png?crop=focalpoint&fit=crop&fp-x=0.1951&fp-y=0.9184&fp-z=2.3859&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=388&mark-y=442&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNDEmaD0yNjcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 8. Click on ENABLE
![Step 8 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/4a58fccb-f5c5-45f6-b528-ba3b897e7151/df7c4bcc-554b-4afc-9976-ff5b261ea796.png?crop=focalpoint&fit=crop&fp-x=0.1069&fp-y=0.2191&fp-z=2.9628&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=314&mark-y=324&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMzMmaD02NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 9. Click on OAuth consent screen
![Step 9 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/9ce818a9-9963-48e5-b8a7-a0858862dfc0/7bde2e89-fd87-4f07-b33c-6c2692b54b5b.png?crop=focalpoint&fit=crop&fp-x=0.0636&fp-y=0.1931&fp-z=2.3621&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=5&mark-y=294&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNTAmaD02NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 10. Select External
![Step 10 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/9cffe184-3ded-4f9f-a18d-bd1e54026303/1a6e6ee3-f4e5-4428-9630-15ab08573291.png?crop=focalpoint&fit=crop&fp-x=0.1351&fp-y=0.2522&fp-z=3.0164&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=455&mark-y=323&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02OCZoPTY4JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 11. Click on CREATE
![Step 11 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/45602521-54ae-4380-b809-126d9c766582/38186b04-2d56-40d7-804b-b7d3fa9c30f6.png?crop=focalpoint&fit=crop&fp-x=0.1480&fp-y=0.3806&fp-z=2.9669&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=461&mark-y=324&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMzImaD02NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 12. Type e.g. "Magic Mirror Project"
![Step 12 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/b5a22d2c-41a8-40a9-86f0-56fd3a49b77d/3e3be8a8-9042-42f7-b7e0-5fbeb62aa85e.png?crop=focalpoint&fit=crop&fp-x=0.2516&fp-y=0.2506&fp-z=1.8692&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=301&mark-y=320&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MjcmaD0yOSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 13. Click on "youremail@gmail.com"
![Step 13 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/83d25340-d747-4279-84b0-8ffb4832beaa/cda9af21-4346-4a54-a433-43bdec56d3ae.png?crop=focalpoint&fit=crop&fp-x=0.2516&fp-y=0.3255&fp-z=1.8692&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=301&mark-y=336&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MjcmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 14. Type "youremail@gmail.com"
![Step 14 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/6482c7f1-3675-4cb9-95c8-d1ec1d997dea/b75f31d9-5f77-47f0-a94c-ddd8673ac374.png?crop=focalpoint&fit=crop&fp-x=0.2498&fp-y=0.9074&fp-z=1.8824&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=303&mark-y=570&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MjImaD0zOSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 15. Click on SAVE AND CONTINUE
![Step 15 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/0af2cc52-6b04-434b-a514-1f110cfbd9c5/49a7ddaf-cd9f-47c7-a82e-358b0d10d5e9.png?crop=focalpoint&fit=crop&fp-x=0.1670&fp-y=0.9685&fp-z=2.6663&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=414&mark-y=624&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNDAmaD02MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 16. Click on SAVE AND CONTINUE
![Step 16 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/20763986-56ca-4744-9946-2a96ed725262/1c4282a5-3a19-41aa-b46a-84fb5e5fe468.png?crop=focalpoint&fit=crop&fp-x=0.1670&fp-y=0.7273&fp-z=2.6663&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=414&mark-y=327&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNDAmaD02MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 17. Click on  ADD USERS
![Step 17 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/6621a281-b802-4769-85c9-7c82b211bdfd/1f5f5538-323d-4c0d-bcd2-2b744998e230.png?crop=focalpoint&fit=crop&fp-x=0.1581&fp-y=0.2632&fp-z=2.7994&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=435&mark-y=326&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xOTImaD02MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 18. Type "youremail@gmail.com"
![Step 18 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/cbb8b01b-d67c-4f57-a722-ca2ce6e3cc10/8b16a83f-0bd8-46a2-b302-d64f7fa8ab1a.png?crop=focalpoint&fit=crop&fp-x=0.7699&fp-y=0.1667&fp-z=2.9611&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=218&mark-y=322&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz03NjUmaD02MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 19. Click on ADD
![Step 19 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/c17693c3-6c63-4dbd-b11c-de1d9f2c534f/03c1dc00-534a-4d3b-9315-9ecaf53257f9.png?crop=focalpoint&fit=crop&fp-x=0.6712&fp-y=0.2214&fp-z=3.0164&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=551&mark-y=323&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05OCZoPTY4JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 20. Click on SAVE AND CONTINUE
![Step 20 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/ccbf179e-3689-4cb4-adbd-e81f79f9095b/cc917dc2-aeb8-403f-93fc-bb86f75de8d6.png?crop=focalpoint&fit=crop&fp-x=0.1670&fp-y=0.4113&fp-z=2.6663&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=414&mark-y=327&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNDAmaD02MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 21. Click on Credentials
![Step 21 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/94ebccc3-4fb8-464a-8b2d-d46f3135eb4a/65aca235-c56d-4744-bea2-5702789e79e2.png?crop=focalpoint&fit=crop&fp-x=0.0636&fp-y=0.1615&fp-z=2.3621&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=5&mark-y=241&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNTAmaD02NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 22. Click on  CREATE CREDENTIALS
![Step 22 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/b7dae3c2-f7c5-40a1-9f15-5d6b5f7f9f85/fe8adc97-f87c-420b-adf5-024ffc1fbc96.png?crop=focalpoint&fit=crop&fp-x=0.2383&fp-y=0.0567&fp-z=2.5761&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=464&mark-y=72&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNzMmaD02NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 23. Click on OAuth client ID…
![Step 23 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/10528847-ccfc-4134-bf5b-87bdb8479a3e/2bf56ec8-be8f-43e9-9c7c-1221ca7d2c66.png?crop=focalpoint&fit=crop&fp-x=0.3009&fp-y=0.1387&fp-z=1.9477&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=351&mark-y=160&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00OTkmaD02NiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 24. Click on Application type
![Step 24 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/0fb50ef0-6777-4245-925f-9f3b5a69f3fe/df3eca94-a14e-4a9c-991a-ffefbc66c245.png?crop=focalpoint&fit=crop&fp-x=0.2516&fp-y=0.1742&fp-z=1.8692&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=301&mark-y=218&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MjcmaD0yOSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 25. Click on TVs and Limited Input devices
![Step 25 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/00ac36b1-f778-4f91-abc0-52220eb4593d/e053abf3-221a-44c6-b488-18b2639f04d5.png?crop=focalpoint&fit=crop&fp-x=0.2516&fp-y=0.2861&fp-z=1.8692&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=301&mark-y=336&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MjcmaD00MiZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 26. Type e.g. "Magic Mirror"
![Step 26 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/639b8c2f-5e10-4cdd-b192-8ada95d16e40/e6492993-4541-461d-b297-e9101626fe10.png?crop=focalpoint&fit=crop&fp-x=0.2516&fp-y=0.2199&fp-z=1.8692&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=301&mark-y=279&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MjcmaD0yOSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 27. Click on CREATE
![Step 27 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/bd5283a5-29cb-4692-84e9-ac521e169955/6a9ae2a6-2949-46e0-a111-3f01ba6d967e.png?crop=focalpoint&fit=crop&fp-x=0.1480&fp-y=0.3341&fp-z=2.9669&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=461&mark-y=324&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMzImaD02NyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 28. Click on  DOWNLOAD JSON
![Step 28 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/e6e4ef3e-1831-49cd-849d-8aa78fb3060b/54a8febf-62ec-4fa1-8b85-782b2db549d3.png?crop=focalpoint&fit=crop&fp-x=0.4271&fp-y=0.6154&fp-z=2.6630&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=479&mark-y=327&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNDEmaD02MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 29. Save the file to the MMM-GoogleDocs-Notes directory
![Step 29 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/85a7b85d-7cc9-40d4-82ca-fab6eb0cb619/cbb697bc-ea5a-46ba-ae13-5b602be73f90.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n)


### 30. Rename the client_secret_<id>.json to client_secret.json
![Step 30 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/9034cf1a-f877-47dd-9ea0-4d15f8ec586e/15517436-2798-460b-b806-8cf5bcb9eb27.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n)


### 31. Authorize via cli

In the _MMM-GoogleDocs-Notes_ directory open a cmd/shell and execute

1.  `node authorize.mjs`

2.  or if you run MM on a raspberry pi `sudo -u pi -- node authorize.mjs` (Change `pi` to the user that runs the Magic Mirror application).


Follow the instructions to authorize the Google account for which you want to display notes on your mirror. It must be one of the "Test users" previously configured in the consent screen.

![Step 31 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/f04cca53-93f5-4882-a048-d4fce5f7fe25/1de7324a-399f-44fd-ac81-50a24b54c1b5.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=501&mark-y=83&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz0yODcmaD0yOSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


## # [Open https://google.com/device](https://google.com/device)


### 32. Enter the code
![Step 32 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/3cf49ae5-480c-43a5-8bf2-af3923137ab5/f508c79a-b08a-4b45-8ac3-8929f2bc91ea.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.4697&fp-z=2.1076&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=379&mark-y=322&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NDEmaD03MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 33. Click on Continue
![Step 33 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/76ceca4e-094b-40ee-9262-459f55db4074/3ba08b7b-b22a-46c9-bd03-61d401f98654.png?crop=focalpoint&fit=crop&fp-x=0.5607&fp-y=0.5311&fp-z=2.8179&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=507&mark-y=322&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xODYmaD03MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 34. Select "youremail@gmail.com"
![Step 34 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/ac409b8f-a107-4012-a824-1fd7c9e17710/c4a516dc-be54-4e25-b7d5-192f7c842009.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.4649&fp-z=1.9460&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=350&mark-y=320&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00OTkmaD03NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 35. Click on Continue
![Step 35 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/7525233c-a00c-4b8e-b9b5-99dd7dbddc0c/a87c8f17-02d4-4292-b4e0-93c0f8772a81.png?crop=focalpoint&fit=crop&fp-x=0.4280&fp-y=0.5028&fp-z=2.9423&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=530&mark-y=321&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNDEmaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 36. Click on Allow
![Step 36 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/88d36e27-d68e-4f64-8ba9-5cd5acefb9b6/4b735d3e-87d0-475c-9f1f-27242c0ceb2a.png?crop=focalpoint&fit=crop&fp-x=0.5436&fp-y=0.6887&fp-z=2.5699&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=463&mark-y=325&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0yNzUmaD02NCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 37. Authorization Done
![Step 37 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/a8ab148d-2f6e-4db1-ae0b-11cfc18d2d7f/2867f6e6-1524-478e-83f6-81451c699c06.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5004&fp-z=1.4291&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=417&mark-y=153&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNjcmaD00MDkmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 38. Continue in the cli

Check for succeeded authorization status

![Step 38 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/aff384af-5b22-4696-a4c9-1aa0a486e016/fde7aabb-c7d7-446c-825b-ab010178fb99.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n)


## # [Open the Google Doc](https://docs.google.com/document)
The module created a new file in your google docs that is used to display.


### 39. Click on MMM Google Docs Note…
![Step 39 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/9d659bf4-6fbe-4ceb-a177-db3c2fb5245b/1938ac24-a7a1-4512-ac9c-b30b00be1ae1.png?crop=focalpoint&fit=crop&fp-x=0.4245&fp-y=0.5540&fp-z=1.1250&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=319&mark-y=1&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MDgmaD03MTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 40. Click on File
![Step 40 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/ca762d15-91bd-450b-a4c5-aac7b8a8deb0/6f06b98c-bce4-44cd-8a7d-9a3be81faf17.png?crop=focalpoint&fit=crop&fp-x=0.0345&fp-y=0.0362&fp-z=3.0749&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=87&mark-y=52&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz04MSZoPTU1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 41. Click on Page setup
![Step 41 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/1ab3e896-73c4-4bec-b881-846429a7778b/1a09068a-0d7d-4b82-a1d3-e6b10a3e9c35.png?crop=focalpoint&fit=crop&fp-x=0.0619&fp-y=0.4701&fp-z=2.9383&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=147&mark-y=336&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNDImaD00MSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 42. Click on Page colour picker
![Step 42 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/948b6c24-a071-4d0d-88bf-82cf719bb65d/e2d34b05-43c6-404a-8d02-f548135fd9e3.png?crop=focalpoint&fit=crop&fp-x=0.4235&fp-y=0.5997&fp-z=2.9880&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=553&mark-y=320&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz05NCZoPTc0JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 43. Click on black
![Step 43 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/a1c5440f-382c-4e3a-aa6f-a7de2c608522/dfef0389-10d7-42eb-af06-2c28744e5b3f.png?crop=focalpoint&fit=crop&fp-x=0.4228&fp-y=0.6324&fp-z=3.0974&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=575&mark-y=332&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MSZoPTUxJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 44. Click on OK
![Step 44 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/12a414cd-bb82-47ce-aae2-ac3a88873fa2/02d6e9ef-be74-41d8-b6c1-fd3b72be6b0c.png?crop=focalpoint&fit=crop&fp-x=0.5713&fp-y=0.6816&fp-z=2.9628&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=533&mark-y=320&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMzMmaD03MyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 45. Click on Text colour
![Step 45 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/569d2bfb-6f14-41a3-8f3b-9f50271a0ad0/dc795a5f-e9f3-4e07-8a99-dbc924493566.png?crop=focalpoint&fit=crop&fp-x=0.3832&fp-y=0.0670&fp-z=3.0308&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=566&mark-y=113&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02OCZoPTY1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 46. Click on white
![Step 46 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/eb238788-3729-4951-86ce-bc073dce5c30/d93587e9-2e63-44d9-8440-7c7ea876b730.png?crop=focalpoint&fit=crop&fp-x=0.4791&fp-y=0.0973&fp-z=3.0974&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=575&mark-y=190&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MSZoPTUxJmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


### 47. Enter some text
![Step 47 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/4c86c044-5892-4db2-b512-d3cf2fcce41f/61388987-905c-4105-bb52-54670558dc03.png?crop=focalpoint&fit=crop&fp-x=0.4245&fp-y=0.5540&fp-z=1.1250&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=319&mark-y=1&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz01MDgmaD03MTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


### 48. (Optional) Click on Insert
![Step 48 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/338c93fb-a886-4730-8cb9-9d7a4b40ef40/b4da0980-7142-41c4-91dc-4d2eebd9008e.png?crop=focalpoint&fit=crop&fp-x=0.0971&fp-y=0.0362&fp-z=3.0388&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=301&mark-y=51&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDYmaD01NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 49. Click on Emoji
![Step 49 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/052cdfa0-400c-45ba-be56-a24b86cb3b42/9ca66a3e-eb34-42cc-9610-05cca7012bc7.png?crop=focalpoint&fit=crop&fp-x=0.1599&fp-y=0.1899&fp-z=2.2034&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=220&mark-y=274&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00MDcmaD01MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


### 50. Click on 😀
![Step 50 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/6e63978a-352b-4b35-bbd6-4e4880db6cb7/c450cd12-445a-41ee-b576-c213bb0fa08b.png?crop=focalpoint&fit=crop&fp-x=0.3415&fp-y=0.3325&fp-z=3.0308&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=568&mark-y=325&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NSZoPTY1JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


## # [MagicMirror²](http://localhost:8080/)


### 51. Install the module to Magic Mirror

Insert the config to your the Magic Mirror config.js (see readme)

```
{
  module: 'MMM-GoogleDocs-Notes',
  header: "Notes",
  ...........
}
```



### 52. Start the Magic Mirror Server

Check the result

![Step 52 screenshot](https://images.tango.us/workflows/cc6e00ec-9201-4156-adbc-aa44e7bc1f18/steps/2cb36acd-d0ca-4f1f-92ca-e862652dd482/5f98eb52-8606-4735-858b-42a1347dae65.png?crop=focalpoint&fit=crop&fp-x=0.8717&fp-y=0.2096&fp-z=2.6621&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=470&mark-y=285&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz02NDAmaD0xNDQmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)

<br/>

***
Created with [Tango.us](https://tango.us?utm_source=markdown&utm_medium=markdown&utm_campaign=workflow%20export%20links)
